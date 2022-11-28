import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSnippetsWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class PostSnippetsWorkspaceSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostSnippetsWorkspaceRequest extends SpeakeasyBase {
    pathParams: PostSnippetsWorkspacePathParams;
    request: Map<string, any>;
    security: PostSnippetsWorkspaceSecurity;
}
export declare class PostSnippetsWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
