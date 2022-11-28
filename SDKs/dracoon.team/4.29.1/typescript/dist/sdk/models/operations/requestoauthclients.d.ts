import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOAuthClientsQueryParams extends SpeakeasyBase {
    filter?: string;
    sort?: string;
}
export declare class RequestOAuthClientsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestOAuthClientsRequest extends SpeakeasyBase {
    queryParams: RequestOAuthClientsQueryParams;
    headers: RequestOAuthClientsHeaders;
}
export declare class RequestOAuthClientsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    oAuthClients?: shared.OAuthClient[];
    statusCode: number;
}
