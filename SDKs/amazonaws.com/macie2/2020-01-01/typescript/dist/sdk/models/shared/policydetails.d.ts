import { SpeakeasyBase } from "../../../internal/utils";
import { FindingAction } from "./findingaction";
import { FindingActor } from "./findingactor";
/**
 * Provides the details of a policy finding.
**/
export declare class PolicyDetails extends SpeakeasyBase {
    action?: FindingAction;
    actor?: FindingActor;
}
