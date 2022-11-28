import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsListAuthorizationsQueryParams extends SpeakeasyBase {
    clientId?: string;
    page?: number;
    perPage?: number;
}
export declare class OauthAuthorizationsListAuthorizationsRequest extends SpeakeasyBase {
    queryParams: OauthAuthorizationsListAuthorizationsQueryParams;
}
export declare class OauthAuthorizationsListAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    authorizations?: shared.Authorization[];
    basicError?: shared.BasicError;
}
