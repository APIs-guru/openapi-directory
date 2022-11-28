import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesTaxJurisdictionsPathParams extends SpeakeasyBase {
    countryCode: string;
}
export declare class GetSalesTaxJurisdictionsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetSalesTaxJurisdictionsRequest extends SpeakeasyBase {
    pathParams: GetSalesTaxJurisdictionsPathParams;
    security: GetSalesTaxJurisdictionsSecurity;
}
export declare class GetSalesTaxJurisdictionsResponse extends SpeakeasyBase {
    contentType: string;
    salesTaxJurisdictions?: shared.SalesTaxJurisdictions;
    statusCode: number;
}
