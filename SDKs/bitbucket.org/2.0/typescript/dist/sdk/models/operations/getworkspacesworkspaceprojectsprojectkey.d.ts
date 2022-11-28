import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceProjectsProjectKeyPathParams extends SpeakeasyBase {
    projectKey: string;
    workspace: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceProjectsProjectKeyPathParams;
    security: GetWorkspacesWorkspaceProjectsProjectKeySecurity;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    project?: Map<string, any>;
}
