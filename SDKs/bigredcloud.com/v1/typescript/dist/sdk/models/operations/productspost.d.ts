import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductsPostRequest extends SpeakeasyBase {
    request: shared.ProductDto;
}
export declare class ProductsPostResponse extends SpeakeasyBase {
    contentType: string;
    productsPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
