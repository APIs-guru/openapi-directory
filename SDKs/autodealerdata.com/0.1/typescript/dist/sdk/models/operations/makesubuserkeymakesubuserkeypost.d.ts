import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MakeSubUserKeyMakeSubUserKeyPostQueryParams extends SpeakeasyBase {
    apiId: string;
    apiKey: string;
    siteName?: string;
}
export declare class MakeSubUserKeyMakeSubUserKeyPostRequest extends SpeakeasyBase {
    queryParams: MakeSubUserKeyMakeSubUserKeyPostQueryParams;
    request: shared.EndpointList;
}
export declare class MakeSubUserKeyMakeSubUserKeyPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    subUserJsonWebToken?: shared.SubUserJsonWebToken;
}
