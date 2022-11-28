import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
    id?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
    id?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
    collections?: CreateWorkspaceRequestBodyWorkspaceCollections[];
    description?: string;
    environments?: CreateWorkspaceRequestBodyWorkspaceEnvironments[];
    mocks?: CreateWorkspaceRequestBodyWorkspaceMocks[];
    monitors?: CreateWorkspaceRequestBodyWorkspaceMonitors[];
    name?: string;
    type?: string;
}
export declare class CreateWorkspaceRequestBody extends SpeakeasyBase {
    workspace?: CreateWorkspaceRequestBodyWorkspace;
}
export declare class CreateWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class CreateWorkspace200ApplicationJson extends SpeakeasyBase {
    workspace?: CreateWorkspace200ApplicationJsonWorkspace;
}
export declare class CreateWorkspace400ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class CreateWorkspace400ApplicationJson extends SpeakeasyBase {
    error?: CreateWorkspace400ApplicationJsonError;
}
export declare class CreateWorkspaceRequest extends SpeakeasyBase {
    request?: CreateWorkspaceRequestBody;
}
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createWorkspace200ApplicationJsonObject?: CreateWorkspace200ApplicationJson;
    createWorkspace400ApplicationJsonObject?: CreateWorkspace400ApplicationJson;
}
