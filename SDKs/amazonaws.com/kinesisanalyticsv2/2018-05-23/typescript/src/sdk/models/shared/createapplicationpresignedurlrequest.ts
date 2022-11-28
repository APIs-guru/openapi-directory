import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlTypeEnum } from "./urltypeenum";



export class CreateApplicationPresignedUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=SessionExpirationDurationInSeconds" })
  sessionExpirationDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=UrlType" })
  urlType: UrlTypeEnum;
}
