import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppProduct } from "./inappproduct";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";



export class InappproductsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InAppProduct })
  inappproduct?: InAppProduct[];

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  pageInfo?: PageInfo;

  @SpeakeasyMetadata()
  tokenPagination?: TokenPagination;
}
