import { SpeakeasyBase } from "../../../internal/utils";
import { TrialSource } from "./trialsource";
/**
 * A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>.
**/
export declare class TrialSummary extends SpeakeasyBase {
    creationTime?: Date;
    displayName?: string;
    lastModifiedTime?: Date;
    trialArn?: string;
    trialName?: string;
    trialSource?: TrialSource;
}
