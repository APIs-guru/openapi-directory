import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    regionName?: string;
}
export declare class GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest extends SpeakeasyBase {
    queryParams: GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams;
}
export declare class GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
