import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InAppProduct } from "./inappproduct";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";


// InappproductsListResponse
/** 
 * Response listing all in-app products.
**/
export class InappproductsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inappproduct", elemType: shared.InAppProduct })
  inappproduct?: InAppProduct[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @Metadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;
}
