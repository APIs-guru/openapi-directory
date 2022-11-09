import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlockAction } from "./blockaction";
import { WipeAction } from "./wipeaction";


// PolicyEnforcementRule
/** 
 * A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
**/
export class PolicyEnforcementRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockAction" })
  blockAction?: BlockAction;

  @Metadata({ data: "json, name=settingName" })
  settingName?: string;

  @Metadata({ data: "json, name=wipeAction" })
  wipeAction?: WipeAction;
}
