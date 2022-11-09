import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProductOrderUboRequestBody extends SpeakeasyBase {
    callbackUrl?: string;
    credits?: number;
    includeDocs?: boolean;
    levels?: string;
    strategy?: string;
    subjectId: string;
}
export declare class ProductOrderUboSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductOrderUboRequest extends SpeakeasyBase {
    request?: ProductOrderUboRequestBody;
    security: ProductOrderUboSecurity;
}
export declare class ProductOrderUboResponse extends SpeakeasyBase {
    contentType: string;
    productOrderUbo200ApplicationJsonAny?: any;
    productOrderUboDefaultApplicationJsonAny?: any;
    statusCode: number;
}
