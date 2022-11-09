import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProductSearchPathParams extends SpeakeasyBase {
    subjectId: string;
}
export declare class ProductSearchSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductSearchRequest extends SpeakeasyBase {
    pathParams: ProductSearchPathParams;
    security: ProductSearchSecurity;
}
export declare class ProductSearchResponse extends SpeakeasyBase {
    contentType: string;
    productSearch200ApplicationJsonAnies?: any[];
    productSearchDefaultApplicationJsonAny?: any;
    statusCode: number;
}
