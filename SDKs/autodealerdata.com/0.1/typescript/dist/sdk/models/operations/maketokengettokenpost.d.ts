import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MakeTokenGetTokenPostQueryParams extends SpeakeasyBase {
    apiId: string;
    apiKey: string;
}
export declare class MakeTokenGetTokenPostRequest extends SpeakeasyBase {
    queryParams: MakeTokenGetTokenPostQueryParams;
}
export declare class MakeTokenGetTokenPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    jsonWebToken?: shared.JsonWebToken;
    statusCode: number;
}
