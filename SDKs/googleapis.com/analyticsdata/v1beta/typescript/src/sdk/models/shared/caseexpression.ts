import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CaseExpression
/** 
 * Used to convert a dimension value to a single case.
**/
export class CaseExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;
}
