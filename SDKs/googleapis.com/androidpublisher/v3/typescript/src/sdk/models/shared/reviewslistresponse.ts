import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageInfo } from "./pageinfo";
import { Review } from "./review";
import { TokenPagination } from "./tokenpagination";


// ReviewsListResponse
/** 
 * Response listing reviews.
**/
export class ReviewsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @Metadata({ data: "json, name=reviews", elemType: shared.Review })
  reviews?: Review[];

  @Metadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;
}
