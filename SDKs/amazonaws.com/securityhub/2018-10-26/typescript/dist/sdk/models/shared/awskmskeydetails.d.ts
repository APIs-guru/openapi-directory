import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains metadata about an KMS key.
**/
export declare class AwsKmsKeyDetails extends SpeakeasyBase {
    awsAccountId?: string;
    creationDate?: number;
    description?: string;
    keyId?: string;
    keyManager?: string;
    keyRotationStatus?: boolean;
    keyState?: string;
    origin?: string;
}
