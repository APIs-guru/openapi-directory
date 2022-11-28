import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreReceiveEnvironmentDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloaded_at" })
  downloadedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PreReceiveEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=default_environment" })
  defaultEnvironment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: PreReceiveEnvironmentDownload;

  @SpeakeasyMetadata({ data: "json, name=hooks_count" })
  hooksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
