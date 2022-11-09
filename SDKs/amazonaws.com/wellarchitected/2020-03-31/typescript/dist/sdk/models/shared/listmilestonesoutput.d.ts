import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MilestoneSummary } from "./milestonesummary";
/**
 * Output of a list milestones call.
**/
export declare class ListMilestonesOutput extends SpeakeasyBase {
    milestoneSummaries?: MilestoneSummary[];
    nextToken?: string;
    workloadId?: string;
}
