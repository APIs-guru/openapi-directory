import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VariableValue
/** 
 * Identifies a property value used in an expression.
**/
export class VariableValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=hierarchyId" })
  hierarchyId?: string;

  @Metadata({ data: "json, name=propertyId" })
  propertyId: string;
}
