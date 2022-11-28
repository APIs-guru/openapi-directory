import { SpeakeasyBase } from "../../../internal/utils";
import { InAppProduct } from "./inappproduct";
import { PageInfo } from "./pageinfo";
import { TokenPagination } from "./tokenpagination";
export declare class InappproductsListResponse extends SpeakeasyBase {
    inappproduct?: InAppProduct[];
    kind?: string;
    pageInfo?: PageInfo;
    tokenPagination?: TokenPagination;
}
