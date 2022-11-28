import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentSource } from "./trialcomponentsource";
/**
 * A short summary of a trial component.
**/
export declare class TrialComponentSimpleSummary extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    trialComponentArn?: string;
    trialComponentName?: string;
    trialComponentSource?: TrialComponentSource;
}
