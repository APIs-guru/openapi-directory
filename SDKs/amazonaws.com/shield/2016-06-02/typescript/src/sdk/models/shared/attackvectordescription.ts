import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttackVectorDescription
/** 
 * Describes the attack.
**/
export class AttackVectorDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=VectorType" })
  vectorType: string;
}
