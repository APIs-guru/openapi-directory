import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttackVectorDescription
/** 
 * Describes the attack.
**/
export class AttackVectorDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VectorType" })
  vectorType: string;
}
