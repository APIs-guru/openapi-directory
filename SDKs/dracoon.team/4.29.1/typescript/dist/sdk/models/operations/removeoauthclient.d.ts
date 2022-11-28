import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOAuthClientPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class RemoveOAuthClientHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveOAuthClientRequest extends SpeakeasyBase {
    pathParams: RemoveOAuthClientPathParams;
    headers: RemoveOAuthClientHeaders;
}
export declare class RemoveOAuthClientResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
