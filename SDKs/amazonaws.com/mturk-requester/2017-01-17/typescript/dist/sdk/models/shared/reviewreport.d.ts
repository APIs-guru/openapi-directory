import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewActionDetail } from "./reviewactiondetail";
import { ReviewResultDetail } from "./reviewresultdetail";
/**
 *  Contains both ReviewResult and ReviewAction elements for a particular HIT.
**/
export declare class ReviewReport extends SpeakeasyBase {
    reviewActions?: ReviewActionDetail[];
    reviewResults?: ReviewResultDetail[];
}
