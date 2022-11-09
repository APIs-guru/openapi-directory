import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReviewActionDetail } from "./reviewactiondetail";
import { ReviewResultDetail } from "./reviewresultdetail";


// ReviewReport
/** 
 *  Contains both ReviewResult and ReviewAction elements for a particular HIT. 
**/
export class ReviewReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReviewActions", elemType: shared.ReviewActionDetail })
  reviewActions?: ReviewActionDetail[];

  @Metadata({ data: "json, name=ReviewResults", elemType: shared.ReviewResultDetail })
  reviewResults?: ReviewResultDetail[];
}
