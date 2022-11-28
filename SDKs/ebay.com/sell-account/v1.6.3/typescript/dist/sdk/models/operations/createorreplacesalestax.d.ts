import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrReplaceSalesTaxPathParams extends SpeakeasyBase {
    countryCode: string;
    jurisdictionId: string;
}
export declare class CreateOrReplaceSalesTaxSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateOrReplaceSalesTaxRequest extends SpeakeasyBase {
    pathParams: CreateOrReplaceSalesTaxPathParams;
    request: shared.SalesTaxBase;
    security: CreateOrReplaceSalesTaxSecurity;
}
export declare class CreateOrReplaceSalesTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
