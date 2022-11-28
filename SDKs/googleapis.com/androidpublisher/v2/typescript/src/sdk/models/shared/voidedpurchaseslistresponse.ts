import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";
import { VoidedPurchase } from "./voidedpurchase";



export class VoidedPurchasesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pageInfo?: PageInfo;

  @SpeakeasyMetadata()
  tokenPagination?: TokenPagination;

  @SpeakeasyMetadata({ elemType: VoidedPurchase })
  voidedPurchases?: VoidedPurchase[];
}
