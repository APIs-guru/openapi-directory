import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreReceiveEnvironmentDownloadStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloaded_at" })
  downloadedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
