import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CaseExpression
/** 
 * Used to convert a dimension value to a single case.
**/
export class CaseExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;
}
