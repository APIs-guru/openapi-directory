import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ServiceAccountKeyTypeEnum {
    GoogleCredentials = "googleCredentials",
    Pkcs12 = "pkcs12"
}
/**
 * Credentials that can be used to authenticate as a service account.
**/
export declare class ServiceAccountKey extends SpeakeasyBase {
    data?: string;
    id?: string;
    publicData?: string;
    type?: ServiceAccountKeyTypeEnum;
}
