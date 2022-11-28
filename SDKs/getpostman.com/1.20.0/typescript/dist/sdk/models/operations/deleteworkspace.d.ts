import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWorkspacePathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class DeleteWorkspace200ApplicationJsonWorkspace extends SpeakeasyBase {
    id?: string;
}
export declare class DeleteWorkspace200ApplicationJson extends SpeakeasyBase {
    workspace?: DeleteWorkspace200ApplicationJsonWorkspace;
}
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspacePathParams;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteWorkspace200ApplicationJsonObject?: DeleteWorkspace200ApplicationJson;
}
