import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SsmAutomation } from "./ssmautomation";
/**
 * The action that starts at the beginning of an incident. The response plan defines the action.
**/
export declare class Action extends SpeakeasyBase {
    ssmAutomation?: SsmAutomation;
}
