import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { Review } from "./review";
import { TokenPagination } from "./tokenpagination";



export class ReviewsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ elemType: Review })
  reviews?: Review[];

  @SpeakeasyMetadata()
  tokenPagination?: TokenPagination;
}
