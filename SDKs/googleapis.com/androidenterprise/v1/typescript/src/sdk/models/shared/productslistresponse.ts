import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { Product } from "./product";
import { TokenPagination } from "./tokenpagination";



export class ProductsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ data: "json, name=product", elemType: Product })
  product?: Product[];

  @SpeakeasyMetadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;
}
