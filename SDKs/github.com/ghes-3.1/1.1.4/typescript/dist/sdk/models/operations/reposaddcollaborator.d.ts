import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposAddCollaboratorPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare enum ReposAddCollaboratorRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}
export declare class ReposAddCollaboratorRequestBody extends SpeakeasyBase {
    permission?: ReposAddCollaboratorRequestBodyPermissionEnum;
    permissions?: string;
}
export declare class ReposAddCollaboratorRequest extends SpeakeasyBase {
    pathParams: ReposAddCollaboratorPathParams;
    request?: ReposAddCollaboratorRequestBody;
}
export declare class ReposAddCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    repositoryInvitation?: shared.RepositoryInvitation;
    validationError?: shared.ValidationError;
}
