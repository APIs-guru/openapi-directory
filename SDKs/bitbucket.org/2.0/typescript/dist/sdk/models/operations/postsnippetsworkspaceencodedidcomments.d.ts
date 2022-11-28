import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSnippetsWorkspaceEncodedIdCommentsPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class PostSnippetsWorkspaceEncodedIdCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostSnippetsWorkspaceEncodedIdCommentsRequest extends SpeakeasyBase {
    pathParams: PostSnippetsWorkspaceEncodedIdCommentsPathParams;
    request: Map<string, any>;
    security: PostSnippetsWorkspaceEncodedIdCommentsSecurity;
}
export declare class PostSnippetsWorkspaceEncodedIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
