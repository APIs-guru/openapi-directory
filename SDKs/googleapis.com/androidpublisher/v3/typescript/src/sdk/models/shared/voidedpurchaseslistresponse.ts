import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";
import { VoidedPurchase } from "./voidedpurchase";


// VoidedPurchasesListResponse
/** 
 * Response for the voidedpurchases.list API.
**/
export class VoidedPurchasesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @Metadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;

  @Metadata({ data: "json, name=voidedPurchases", elemType: shared.VoidedPurchase })
  voidedPurchases?: VoidedPurchase[];
}
