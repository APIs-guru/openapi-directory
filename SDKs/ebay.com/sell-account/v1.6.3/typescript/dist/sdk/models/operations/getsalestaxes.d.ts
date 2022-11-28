import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesTaxesQueryParams extends SpeakeasyBase {
    countryCode: string;
}
export declare class GetSalesTaxesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetSalesTaxesRequest extends SpeakeasyBase {
    queryParams: GetSalesTaxesQueryParams;
    security: GetSalesTaxesSecurity;
}
export declare class GetSalesTaxesResponse extends SpeakeasyBase {
    contentType: string;
    salesTaxes?: shared.SalesTaxes;
    statusCode: number;
}
