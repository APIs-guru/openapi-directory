import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSnippetsRoleEnum {
    Owner = "owner",
    Contributor = "contributor",
    Member = "member"
}
export declare class GetSnippetsQueryParams extends SpeakeasyBase {
    role?: GetSnippetsRoleEnum;
}
export declare class GetSnippetsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsRequest extends SpeakeasyBase {
    queryParams: GetSnippetsQueryParams;
    security: GetSnippetsSecurity;
}
export declare class GetSnippetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedSnippets?: shared.PaginatedSnippets;
}
