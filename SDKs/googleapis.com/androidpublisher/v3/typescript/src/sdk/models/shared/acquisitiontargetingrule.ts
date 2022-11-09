import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetingRuleScope } from "./targetingrulescope";


// AcquisitionTargetingRule
/** 
 * Represents a targeting rule of the form: User never had {scope} before.
**/
export class AcquisitionTargetingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=scope" })
  scope?: TargetingRuleScope;
}
