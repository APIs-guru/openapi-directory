import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WafOverrideAction
/** 
 * Details about an override action for a rule.
**/
export class WafOverrideAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;
}
