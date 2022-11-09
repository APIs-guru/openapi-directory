import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LensReviewReport } from "./lensreviewreport";
/**
 * Output of a get lens review report call.
**/
export declare class GetLensReviewReportOutput extends SpeakeasyBase {
    lensReviewReport?: LensReviewReport;
    milestoneNumber?: number;
    workloadId?: string;
}
