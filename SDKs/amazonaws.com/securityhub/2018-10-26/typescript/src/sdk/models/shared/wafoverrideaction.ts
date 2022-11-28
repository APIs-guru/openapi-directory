import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WafOverrideAction
/** 
 * Details about an override action for a rule.
**/
export class WafOverrideAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
