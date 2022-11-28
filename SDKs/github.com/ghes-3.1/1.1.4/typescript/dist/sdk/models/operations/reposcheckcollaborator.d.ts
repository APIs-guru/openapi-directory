import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposCheckCollaboratorPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposCheckCollaboratorRequest extends SpeakeasyBase {
    pathParams: ReposCheckCollaboratorPathParams;
}
export declare class ReposCheckCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
