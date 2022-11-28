import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensReviewReport } from "./lensreviewreport";



// GetLensReviewReportOutput
/** 
 * Output of a get lens review report call.
**/
export class GetLensReviewReportOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensReviewReport" })
  lensReviewReport?: LensReviewReport;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
