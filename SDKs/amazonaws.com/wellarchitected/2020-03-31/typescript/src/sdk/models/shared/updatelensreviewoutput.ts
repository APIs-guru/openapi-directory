import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LensReview } from "./lensreview";


// UpdateLensReviewOutput
/** 
 * Output of a update lens review call.
**/
export class UpdateLensReviewOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensReview" })
  lensReview?: LensReview;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
