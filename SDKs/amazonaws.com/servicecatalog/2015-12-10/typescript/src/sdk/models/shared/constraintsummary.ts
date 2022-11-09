import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConstraintSummary
/** 
 * Summary information about a constraint.
**/
export class ConstraintSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
