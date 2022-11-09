import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreReceiveEnvironmentDownloadStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloaded_at" })
  downloadedAt?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
