import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { Review } from "./review";
import { TokenPagination } from "./tokenpagination";



// ReviewsListResponse
/** 
 * Response listing reviews.
**/
export class ReviewsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ data: "json, name=reviews", elemType: Review })
  reviews?: Review[];

  @SpeakeasyMetadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;
}
