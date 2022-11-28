import { SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";
import { VoidedPurchase } from "./voidedpurchase";
/**
 * Response for the voidedpurchases.list API.
**/
export declare class VoidedPurchasesListResponse extends SpeakeasyBase {
    pageInfo?: PageInfo;
    tokenPagination?: TokenPagination;
    voidedPurchases?: VoidedPurchase[];
}
