import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";
import { VoidedPurchase } from "./voidedpurchase";



// VoidedPurchasesListResponse
/** 
 * Response for the voidedpurchases.list API.
**/
export class VoidedPurchasesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ data: "json, name=tokenPagination" })
  tokenPagination?: TokenPagination;

  @SpeakeasyMetadata({ data: "json, name=voidedPurchases", elemType: VoidedPurchase })
  voidedPurchases?: VoidedPurchase[];
}
