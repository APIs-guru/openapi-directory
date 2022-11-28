import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductOrderPathParams extends SpeakeasyBase {
    sku: string;
    subjectId: string;
}
export declare class ProductOrderSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductOrderRequest extends SpeakeasyBase {
    pathParams: ProductOrderPathParams;
    security: ProductOrderSecurity;
}
export declare class ProductOrderResponse extends SpeakeasyBase {
    contentType: string;
    productOrder200ApplicationJsonAny?: any;
    productOrderDefaultApplicationJsonAny?: any;
    statusCode: number;
}
