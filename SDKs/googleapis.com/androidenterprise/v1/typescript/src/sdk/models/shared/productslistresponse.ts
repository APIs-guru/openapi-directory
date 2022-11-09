import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageInfo } from "./pageinfo";
import { Product } from "./product";
import { TokenPagination } from "./tokenpagination";


export class ProductsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @Metadata({ data: "json, name=product", elemType: shared.Product })
  product?: Product[];

  @Metadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;
}
