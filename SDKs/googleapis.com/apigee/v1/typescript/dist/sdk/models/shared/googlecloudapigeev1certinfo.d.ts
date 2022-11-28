import { SpeakeasyBase } from "../../../internal/utils";
/**
 * X.509 certificate as defined in RFC 5280.
**/
export declare class GoogleCloudApigeeV1CertInfo extends SpeakeasyBase {
    basicConstraints?: string;
    expiryDate?: string;
    isValid?: string;
    issuer?: string;
    publicKey?: string;
    serialNumber?: string;
    sigAlgName?: string;
    subject?: string;
    subjectAlternativeNames?: string[];
    validFrom?: string;
    version?: number;
}
