import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { TrialComponentSource } from "./trialcomponentsource";
/**
 * A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>.
**/
export declare class TrialComponentSummary extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    endTime?: Date;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    startTime?: Date;
    status?: TrialComponentStatus;
    trialComponentArn?: string;
    trialComponentName?: string;
    trialComponentSource?: TrialComponentSource;
}
