import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LogoTypeEnum {
    Logo = "LOGO",
    Banner = "BANNER",
    Screenshot = "SCREENSHOT"
}


export class Logo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LogoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
