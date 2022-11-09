import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MakeTokenGetTokenGetQueryParams extends SpeakeasyBase {
    apiId: string;
    apiKey: string;
}
export declare class MakeTokenGetTokenGetRequest extends SpeakeasyBase {
    queryParams: MakeTokenGetTokenGetQueryParams;
}
export declare class MakeTokenGetTokenGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    jsonWebToken?: shared.JsonWebToken;
    statusCode: number;
}
