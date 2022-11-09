import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsSecretsManagerSecretRotationRules
/** 
 * Defines the rotation schedule for the secret.
**/
export class AwsSecretsManagerSecretRotationRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomaticallyAfterDays" })
  automaticallyAfterDays?: number;
}
