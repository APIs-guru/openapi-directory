import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
export declare class GetProductResponse extends SpeakeasyBase {
    data: Product;
    status: string;
    statusCode: number;
}
