import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RotationRulesType
/** 
 * A structure that defines the rotation configuration for the secret.
**/
export class RotationRulesType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomaticallyAfterDays" })
  automaticallyAfterDays?: number;
}
