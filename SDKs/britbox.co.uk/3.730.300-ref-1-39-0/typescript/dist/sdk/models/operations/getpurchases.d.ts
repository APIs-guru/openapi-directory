import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPurchasesQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetPurchasesSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetPurchasesRequest extends SpeakeasyBase {
    queryParams: GetPurchasesQueryParams;
    security: GetPurchasesSecurity;
}
export declare class GetPurchasesResponse extends SpeakeasyBase {
    contentType: string;
    purchases?: shared.Purchase[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
