import { SpeakeasyBase } from "../../../internal/utils";
import { LabelCountersForWorkteam } from "./labelcountersforworkteam";
/**
 * Provides summary information for a work team.
**/
export declare class LabelingJobForWorkteamSummary extends SpeakeasyBase {
    creationTime: Date;
    jobReferenceCode: string;
    labelCounters?: LabelCountersForWorkteam;
    labelingJobName?: string;
    numberOfHumanWorkersPerDataObject?: number;
    workRequesterAccountId: string;
}
