import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsSecretsManagerSecretRotationRules } from "./awssecretsmanagersecretrotationrules";


// AwsSecretsManagerSecretDetails
/** 
 * Details about an Secrets Manager secret.
**/
export class AwsSecretsManagerSecretDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RotationEnabled" })
  rotationEnabled?: boolean;

  @Metadata({ data: "json, name=RotationLambdaArn" })
  rotationLambdaArn?: string;

  @Metadata({ data: "json, name=RotationOccurredWithinFrequency" })
  rotationOccurredWithinFrequency?: boolean;

  @Metadata({ data: "json, name=RotationRules" })
  rotationRules?: AwsSecretsManagerSecretRotationRules;
}
