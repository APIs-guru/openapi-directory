import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductAvailabilityPathParams extends SpeakeasyBase {
    sku: string;
    subjectId: string;
}
export declare class ProductAvailabilitySecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductAvailabilityRequest extends SpeakeasyBase {
    pathParams: ProductAvailabilityPathParams;
    security: ProductAvailabilitySecurity;
}
export declare class ProductAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    productAvailability200ApplicationJsonAny?: any;
    productAvailabilityDefaultApplicationJsonAny?: any;
    statusCode: number;
}
