import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VariableValue
/** 
 * Identifies a property value used in an expression.
**/
export class VariableValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hierarchyId" })
  hierarchyId?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId: string;
}
