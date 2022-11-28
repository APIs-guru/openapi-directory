import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensReview } from "./lensreview";



// UpdateLensReviewOutput
/** 
 * Output of a update lens review call.
**/
export class UpdateLensReviewOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensReview" })
  lensReview?: LensReview;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
