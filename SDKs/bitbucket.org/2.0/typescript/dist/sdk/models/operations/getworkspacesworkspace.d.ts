import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspaceSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspacePathParams;
    security: GetWorkspacesWorkspaceSecurity;
}
export declare class GetWorkspacesWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    workspace?: Map<string, any>;
}
