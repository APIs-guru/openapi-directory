import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams extends SpeakeasyBase {
    encodedId: string;
    revision: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams extends SpeakeasyBase {
    path?: string;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdRevisionDiffPathParams;
    queryParams: GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams;
    security: GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
