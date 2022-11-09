import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRegionMarketShareGetRegionMarketShareGetQueryParams extends SpeakeasyBase {
    jwt: string;
    regionName?: string;
}
export declare class GetRegionMarketShareGetRegionMarketShareGetRequest extends SpeakeasyBase {
    queryParams: GetRegionMarketShareGetRegionMarketShareGetQueryParams;
}
export declare class GetRegionMarketShareGetRegionMarketShareGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
