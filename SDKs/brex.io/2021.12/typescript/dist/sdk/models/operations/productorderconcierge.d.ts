import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProductOrderConciergeRequestBody extends SpeakeasyBase {
    companyName?: string;
    contactEmail?: string;
    contactPhone?: string;
    costConfirmation?: boolean;
    country?: string;
    financialData?: boolean;
    historicInformation?: boolean;
    informationRequirements?: string;
    locationInvestigation?: boolean;
    priority?: string;
    registerData?: boolean;
    registerNumber?: string;
    subjectId?: string;
}
export declare class ProductOrderConciergeSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductOrderConciergeRequest extends SpeakeasyBase {
    request?: ProductOrderConciergeRequestBody;
    security: ProductOrderConciergeSecurity;
}
export declare class ProductOrderConciergeResponse extends SpeakeasyBase {
    contentType: string;
    productOrderConcierge200ApplicationJsonAny?: any;
    productOrderConciergeDefaultApplicationJsonAny?: any;
    statusCode: number;
}
