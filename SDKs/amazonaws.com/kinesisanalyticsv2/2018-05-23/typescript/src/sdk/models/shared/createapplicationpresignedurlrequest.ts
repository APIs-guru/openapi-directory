import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlTypeEnum } from "./urltypeenum";


export class CreateApplicationPresignedUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=SessionExpirationDurationInSeconds" })
  sessionExpirationDurationInSeconds?: number;

  @Metadata({ data: "json, name=UrlType" })
  urlType: UrlTypeEnum;
}
