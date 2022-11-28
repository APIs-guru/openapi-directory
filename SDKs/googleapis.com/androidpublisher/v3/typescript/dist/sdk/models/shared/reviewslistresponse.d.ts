import { SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { Review } from "./review";
import { TokenPagination } from "./tokenpagination";
/**
 * Response listing reviews.
**/
export declare class ReviewsListResponse extends SpeakeasyBase {
    pageInfo?: PageInfo;
    reviews?: Review[];
    tokenPagination?: TokenPagination;
}
