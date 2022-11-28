import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RotationRulesType
/** 
 * A structure that defines the rotation configuration for the secret.
**/
export class RotationRulesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomaticallyAfterDays" })
  automaticallyAfterDays?: number;
}
