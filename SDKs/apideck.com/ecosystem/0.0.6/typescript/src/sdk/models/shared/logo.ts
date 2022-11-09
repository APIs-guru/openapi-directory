import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LogoTypeEnum {
    Logo = "LOGO"
,    Banner = "BANNER"
,    Screenshot = "SCREENSHOT"
}


export class Logo extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: LogoTypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
