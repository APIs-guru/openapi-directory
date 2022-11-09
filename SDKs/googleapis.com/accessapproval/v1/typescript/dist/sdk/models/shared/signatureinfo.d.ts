import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about the digital signature of the resource.
**/
export declare class SignatureInfo extends SpeakeasyBase {
    customerKmsKeyVersion?: string;
    googlePublicKeyPem?: string;
    signature?: string;
}
