import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileTypeEnum {
    Logo = "LOGO"
,    Banner = "BANNER"
,    Screenshot = "SCREENSHOT"
}


export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: FileTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
