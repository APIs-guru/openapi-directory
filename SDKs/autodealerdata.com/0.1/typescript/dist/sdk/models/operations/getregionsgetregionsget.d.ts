import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRegionsGetRegionsGetQueryParams extends SpeakeasyBase {
    jwt: string;
}
export declare class GetRegionsGetRegionsGetRequest extends SpeakeasyBase {
    queryParams: GetRegionsGetRegionsGetQueryParams;
}
export declare class GetRegionsGetRegionsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    regionResp?: shared.RegionResp;
    statusCode: number;
}
