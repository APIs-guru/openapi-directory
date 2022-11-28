import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingRuleScope } from "./targetingrulescope";



// AcquisitionTargetingRule
/** 
 * Represents a targeting rule of the form: User never had {scope} before.
**/
export class AcquisitionTargetingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: TargetingRuleScope;
}
