import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppProduct } from "./inappproduct";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";



// InappproductsListResponse
/** 
 * Response listing all in-app products.
**/
export class InappproductsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inappproduct", elemType: InAppProduct })
  inappproduct?: InAppProduct[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;
}
