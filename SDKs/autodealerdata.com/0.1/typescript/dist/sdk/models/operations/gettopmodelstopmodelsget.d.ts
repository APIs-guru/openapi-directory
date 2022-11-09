import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTopModelsTopModelsGetQueryParams extends SpeakeasyBase {
    jwt: string;
    regionName?: string;
}
export declare class GetTopModelsTopModelsGetRequest extends SpeakeasyBase {
    queryParams: GetTopModelsTopModelsGetQueryParams;
}
export declare class GetTopModelsTopModelsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    topModelResp?: shared.TopModelResp;
}
