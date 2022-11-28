import { SpeakeasyBase } from "../../../internal/utils";
import { BlockAction } from "./blockaction";
import { WipeAction } from "./wipeaction";
/**
 * A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
**/
export declare class PolicyEnforcementRule extends SpeakeasyBase {
    blockAction?: BlockAction;
    settingName?: string;
    wipeAction?: WipeAction;
}
