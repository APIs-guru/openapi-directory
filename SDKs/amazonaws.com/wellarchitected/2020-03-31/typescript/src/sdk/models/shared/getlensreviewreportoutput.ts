import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LensReviewReport } from "./lensreviewreport";


// GetLensReviewReportOutput
/** 
 * Output of a get lens review report call.
**/
export class GetLensReviewReportOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensReviewReport" })
  lensReviewReport?: LensReviewReport;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
