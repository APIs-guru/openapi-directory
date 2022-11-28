import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecretsManagerSecretRotationRules } from "./awssecretsmanagersecretrotationrules";
/**
 * Details about an Secrets Manager secret.
**/
export declare class AwsSecretsManagerSecretDetails extends SpeakeasyBase {
    deleted?: boolean;
    description?: string;
    kmsKeyId?: string;
    name?: string;
    rotationEnabled?: boolean;
    rotationLambdaArn?: string;
    rotationOccurredWithinFrequency?: boolean;
    rotationRules?: AwsSecretsManagerSecretRotationRules;
}
