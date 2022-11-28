import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MakePurchaseQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class MakePurchaseSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class MakePurchaseRequest extends SpeakeasyBase {
    queryParams: MakePurchaseQueryParams;
    request: shared.PurchaseRequest;
    security: MakePurchaseSecurity;
}
export declare class MakePurchaseResponse extends SpeakeasyBase {
    contentType: string;
    entitlement?: shared.Entitlement;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
