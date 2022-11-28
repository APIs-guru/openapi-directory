import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSalesCountCarTypeEnum {
    New = "new",
    Used = "used"
}
export declare enum GetSalesCountCountryEnum {
    UsLower = "us",
    CaLower = "ca",
    UsUpper = "US",
    CaUpper = "CA"
}
export declare class GetSalesCountQueryParams extends SpeakeasyBase {
    apiKey?: string;
    carType?: GetSalesCountCarTypeEnum;
    cityState?: string;
    country?: GetSalesCountCountryEnum;
    make?: string;
    mm?: string;
    state?: string;
    taxonomyVin?: string;
    vin?: string;
    ymm?: string;
    ymmt?: string;
}
export declare class GetSalesCountRequest extends SpeakeasyBase {
    queryParams: GetSalesCountQueryParams;
}
export declare class GetSalesCountResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    sales?: shared.Sales;
    statusCode: number;
}
