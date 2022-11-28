import { SpeakeasyBase } from "../../../internal/utils";
import { UserInitiatedCancellation } from "./userinitiatedcancellation";
/**
 * Information specific to a subscription in canceled state.
**/
export declare class CanceledStateContext extends SpeakeasyBase {
    developerInitiatedCancellation?: Map<string, any>;
    replacementCancellation?: Map<string, any>;
    systemInitiatedCancellation?: Map<string, any>;
    userInitiatedCancellation?: UserInitiatedCancellation;
}
