import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleWorkspacePathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class SingleWorkspace200ApplicationJsonWorkspaceCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class SingleWorkspace200ApplicationJsonWorkspaceEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class SingleWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
    collections?: SingleWorkspace200ApplicationJsonWorkspaceCollections[];
    description?: string;
    environments?: SingleWorkspace200ApplicationJsonWorkspaceEnvironments[];
    id?: string;
    name?: string;
    type?: string;
}
export declare class SingleWorkspace200ApplicationJson extends SpeakeasyBase {
    workspace?: SingleWorkspace200ApplicationJsonWorkspace;
}
export declare class SingleWorkspace404ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class SingleWorkspace404ApplicationJson extends SpeakeasyBase {
    error?: SingleWorkspace404ApplicationJsonError;
}
export declare class SingleWorkspaceRequest extends SpeakeasyBase {
    pathParams: SingleWorkspacePathParams;
}
export declare class SingleWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    singleWorkspace200ApplicationJsonObject?: SingleWorkspace200ApplicationJson;
    singleWorkspace404ApplicationJsonObject?: SingleWorkspace404ApplicationJson;
}
