import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesTaxPathParams extends SpeakeasyBase {
    countryCode: string;
    jurisdictionId: string;
}
export declare class GetSalesTaxSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetSalesTaxRequest extends SpeakeasyBase {
    pathParams: GetSalesTaxPathParams;
    security: GetSalesTaxSecurity;
}
export declare class GetSalesTaxResponse extends SpeakeasyBase {
    contentType: string;
    salesTax?: shared.SalesTax;
    statusCode: number;
}
