import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1TlsInfoCommonName } from "./googlecloudapigeev1tlsinfocommonname";
/**
 * TLS configuration information for virtual hosts and TargetServers.
**/
export declare class GoogleCloudApigeeV1TlsInfo extends SpeakeasyBase {
    ciphers?: string[];
    clientAuthEnabled?: boolean;
    commonName?: GoogleCloudApigeeV1TlsInfoCommonName;
    enabled?: boolean;
    ignoreValidationErrors?: boolean;
    keyAlias?: string;
    keyStore?: string;
    protocols?: string[];
    trustStore?: string;
}
