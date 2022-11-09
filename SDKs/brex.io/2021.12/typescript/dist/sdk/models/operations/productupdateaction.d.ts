import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProductUpdateActionPathParams extends SpeakeasyBase {
    action: string;
    orderId: string;
}
export declare class ProductUpdateActionRequestBody extends SpeakeasyBase {
    credits?: number;
}
export declare class ProductUpdateActionSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductUpdateActionRequest extends SpeakeasyBase {
    pathParams: ProductUpdateActionPathParams;
    request?: ProductUpdateActionRequestBody;
    security: ProductUpdateActionSecurity;
}
export declare class ProductUpdateActionResponse extends SpeakeasyBase {
    contentType: string;
    productUpdateAction200ApplicationJsonAny?: any;
    productUpdateActionDefaultApplicationJsonAny?: any;
    statusCode: number;
}
