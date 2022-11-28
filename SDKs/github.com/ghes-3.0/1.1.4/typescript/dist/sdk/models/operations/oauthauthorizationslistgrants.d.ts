import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OauthAuthorizationsListGrantsQueryParams extends SpeakeasyBase {
    clientId?: string;
    page?: number;
    perPage?: number;
}
export declare class OauthAuthorizationsListGrantsRequest extends SpeakeasyBase {
    queryParams: OauthAuthorizationsListGrantsQueryParams;
}
export declare class OauthAuthorizationsListGrantsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    applicationGrants?: shared.ApplicationGrant[];
    basicError?: shared.BasicError;
}
