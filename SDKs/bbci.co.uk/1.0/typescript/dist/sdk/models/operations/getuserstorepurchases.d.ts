import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetUserStorePurchasesQueryParams extends SpeakeasyBase {
    identityCookie: number;
}
export declare class GetUserStorePurchasesSecurity extends SpeakeasyBase {
    basic: shared.SchemeBasic;
}
export declare class GetUserStorePurchasesRequest extends SpeakeasyBase {
    queryParams: GetUserStorePurchasesQueryParams;
    security: GetUserStorePurchasesSecurity;
}
export declare class GetUserStorePurchasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
