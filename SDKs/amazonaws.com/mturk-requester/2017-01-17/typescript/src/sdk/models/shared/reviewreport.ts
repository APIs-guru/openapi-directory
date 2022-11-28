import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewActionDetail } from "./reviewactiondetail";
import { ReviewResultDetail } from "./reviewresultdetail";



// ReviewReport
/** 
 *  Contains both ReviewResult and ReviewAction elements for a particular HIT. 
**/
export class ReviewReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReviewActions", elemType: ReviewActionDetail })
  reviewActions?: ReviewActionDetail[];

  @SpeakeasyMetadata({ data: "json, name=ReviewResults", elemType: ReviewResultDetail })
  reviewResults?: ReviewResultDetail[];
}
