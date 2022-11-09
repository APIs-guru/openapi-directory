import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProductNotifierCreatePathParams extends SpeakeasyBase {
    orderId: string;
    type: string;
    uri: string;
}
export declare class ProductNotifierCreateSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductNotifierCreateRequest extends SpeakeasyBase {
    pathParams: ProductNotifierCreatePathParams;
    security: ProductNotifierCreateSecurity;
}
export declare class ProductNotifierCreateResponse extends SpeakeasyBase {
    contentType: string;
    productNotifierCreate200ApplicationJsonAny?: any;
    productNotifierCreateDefaultApplicationJsonAny?: any;
    statusCode: number;
}
