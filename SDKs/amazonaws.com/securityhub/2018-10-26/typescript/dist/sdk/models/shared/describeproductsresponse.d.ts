import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
export declare class DescribeProductsResponse extends SpeakeasyBase {
    nextToken?: string;
    products: Product[];
}
