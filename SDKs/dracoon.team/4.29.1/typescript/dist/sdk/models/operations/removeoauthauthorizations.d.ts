import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOAuthAuthorizationsPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class RemoveOAuthAuthorizationsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveOAuthAuthorizationsRequest extends SpeakeasyBase {
    pathParams: RemoveOAuthAuthorizationsPathParams;
    headers: RemoveOAuthAuthorizationsHeaders;
}
export declare class RemoveOAuthAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
