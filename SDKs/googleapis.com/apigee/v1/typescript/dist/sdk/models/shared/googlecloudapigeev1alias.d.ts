import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Certificate } from "./googlecloudapigeev1certificate";
export declare enum GoogleCloudApigeeV1AliasTypeEnum {
    AliasTypeUnspecified = "ALIAS_TYPE_UNSPECIFIED",
    Cert = "CERT",
    KeyCert = "KEY_CERT"
}
/**
 * Reference to a certificate or key/certificate pair.
**/
export declare class GoogleCloudApigeeV1Alias extends SpeakeasyBase {
    alias?: string;
    certsInfo?: GoogleCloudApigeeV1Certificate;
    type?: GoogleCloudApigeeV1AliasTypeEnum;
}
