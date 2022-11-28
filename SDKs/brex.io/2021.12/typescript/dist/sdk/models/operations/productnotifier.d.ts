import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductNotifierPathParams extends SpeakeasyBase {
    notifierId: string;
}
export declare class ProductNotifierSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductNotifierRequest extends SpeakeasyBase {
    pathParams: ProductNotifierPathParams;
    security: ProductNotifierSecurity;
}
export declare class ProductNotifierResponse extends SpeakeasyBase {
    contentType: string;
    productNotifier200ApplicationJsonAny?: any;
    productNotifierDefaultApplicationJsonAny?: any;
    statusCode: number;
}
