import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSecretsManagerSecretRotationRules } from "./awssecretsmanagersecretrotationrules";



// AwsSecretsManagerSecretDetails
/** 
 * Details about an Secrets Manager secret.
**/
export class AwsSecretsManagerSecretDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationEnabled" })
  rotationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RotationLambdaArn" })
  rotationLambdaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RotationOccurredWithinFrequency" })
  rotationOccurredWithinFrequency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RotationRules" })
  rotationRules?: AwsSecretsManagerSecretRotationRules;
}
