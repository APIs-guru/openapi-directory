import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductsPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ProductsPutRequest extends SpeakeasyBase {
    pathParams: ProductsPutPathParams;
    request: shared.ProductDto;
}
export declare class ProductsPutResponse extends SpeakeasyBase {
    contentType: string;
    productsPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
