import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateWorkspacePathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
    id?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
    id?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
    collections?: UpdateWorkspaceRequestBodyWorkspaceCollections[];
    description?: string;
    environments?: UpdateWorkspaceRequestBodyWorkspaceEnvironments[];
    mocks?: UpdateWorkspaceRequestBodyWorkspaceMocks[];
    monitors?: UpdateWorkspaceRequestBodyWorkspaceMonitors[];
    name?: string;
}
export declare class UpdateWorkspaceRequestBody extends SpeakeasyBase {
    workspace?: UpdateWorkspaceRequestBodyWorkspace;
}
export declare class UpdateWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class UpdateWorkspace200ApplicationJson extends SpeakeasyBase {
    workspace?: UpdateWorkspace200ApplicationJsonWorkspace;
}
export declare class UpdateWorkspace403ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class UpdateWorkspace403ApplicationJson extends SpeakeasyBase {
    error?: UpdateWorkspace403ApplicationJsonError;
}
export declare class UpdateWorkspace404ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class UpdateWorkspace404ApplicationJson extends SpeakeasyBase {
    error?: UpdateWorkspace404ApplicationJsonError;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    pathParams: UpdateWorkspacePathParams;
    request?: UpdateWorkspaceRequestBody;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateWorkspace200ApplicationJsonObject?: UpdateWorkspace200ApplicationJson;
    updateWorkspace403ApplicationJsonObject?: UpdateWorkspace403ApplicationJson;
    updateWorkspace404ApplicationJsonObject?: UpdateWorkspace404ApplicationJson;
}
