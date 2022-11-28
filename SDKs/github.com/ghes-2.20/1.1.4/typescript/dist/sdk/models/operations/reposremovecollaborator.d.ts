import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposRemoveCollaboratorPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposRemoveCollaboratorRequest extends SpeakeasyBase {
    pathParams: ReposRemoveCollaboratorPathParams;
}
export declare class ReposRemoveCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
