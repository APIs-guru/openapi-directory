import { SpeakeasyBase } from "../../../internal/utils";
import { PageInfo } from "./pageinfo";
import { Product } from "./product";
import { TokenPagination } from "./tokenpagination";
export declare class ProductsListResponse extends SpeakeasyBase {
    pageInfo?: PageInfo;
    product?: Product[];
    tokenPagination?: TokenPagination;
}
