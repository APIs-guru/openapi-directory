import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPopularCarsCarTypeEnum {
    New = "new",
    Used = "used"
}
export declare enum GetPopularCarsCountryEnum {
    UsLower = "us",
    CaLower = "ca",
    UsUpper = "US",
    CaUpper = "CA"
}
export declare class GetPopularCarsQueryParams extends SpeakeasyBase {
    apiKey?: string;
    carType: GetPopularCarsCarTypeEnum;
    cityState?: string;
    country?: GetPopularCarsCountryEnum;
    state?: string;
}
export declare class GetPopularCarsRequest extends SpeakeasyBase {
    queryParams: GetPopularCarsQueryParams;
}
export declare class GetPopularCarsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    popularCars?: shared.PopularCars;
    statusCode: number;
}
