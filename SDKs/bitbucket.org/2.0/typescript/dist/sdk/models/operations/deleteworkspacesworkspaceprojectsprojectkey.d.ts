import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams extends SpeakeasyBase {
    projectKey: string;
    workspace: string;
}
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeyRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams;
    security: DeleteWorkspacesWorkspaceProjectsProjectKeySecurity;
}
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
