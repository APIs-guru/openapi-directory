import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockAction } from "./blockaction";
import { WipeAction } from "./wipeaction";



// PolicyEnforcementRule
/** 
 * A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
**/
export class PolicyEnforcementRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockAction" })
  blockAction?: BlockAction;

  @SpeakeasyMetadata({ data: "json, name=settingName" })
  settingName?: string;

  @SpeakeasyMetadata({ data: "json, name=wipeAction" })
  wipeAction?: WipeAction;
}
