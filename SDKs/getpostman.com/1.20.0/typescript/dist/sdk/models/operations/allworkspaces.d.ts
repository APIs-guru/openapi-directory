import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllWorkspaces200ApplicationJsonWorkspaces extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: string;
}
export declare class AllWorkspaces200ApplicationJson extends SpeakeasyBase {
    workspaces?: AllWorkspaces200ApplicationJsonWorkspaces[];
}
export declare class AllWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allWorkspaces200ApplicationJsonObject?: AllWorkspaces200ApplicationJson;
}
