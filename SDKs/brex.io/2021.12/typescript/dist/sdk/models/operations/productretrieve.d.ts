import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductRetrievePathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class ProductRetrieveSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductRetrieveRequest extends SpeakeasyBase {
    pathParams: ProductRetrievePathParams;
    security: ProductRetrieveSecurity;
}
export declare class ProductRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    productRetrieve200ApplicationJsonOneOf?: any;
    productRetrieveDefaultApplicationJsonAny?: any;
    statusCode: number;
}
