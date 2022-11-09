import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlTypeEnum } from "./urltypeenum";
export declare class CreateApplicationPresignedUrlRequest extends SpeakeasyBase {
    applicationName: string;
    sessionExpirationDurationInSeconds?: number;
    urlType: UrlTypeEnum;
}
