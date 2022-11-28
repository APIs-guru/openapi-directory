import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConstraintSummary
/** 
 * Summary information about a constraint.
**/
export class ConstraintSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
