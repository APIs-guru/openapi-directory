import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSecretsManagerSecretRotationRules
/** 
 * Defines the rotation schedule for the secret.
**/
export class AwsSecretsManagerSecretRotationRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomaticallyAfterDays" })
  automaticallyAfterDays?: number;
}
