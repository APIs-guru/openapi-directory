import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileTypeEnum {
    Logo = "LOGO",
    Banner = "BANNER",
    Screenshot = "SCREENSHOT"
}


export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
