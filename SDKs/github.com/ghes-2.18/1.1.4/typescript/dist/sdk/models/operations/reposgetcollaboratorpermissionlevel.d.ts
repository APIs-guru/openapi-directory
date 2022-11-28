import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCollaboratorPermissionLevelPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    username: string;
}
export declare class ReposGetCollaboratorPermissionLevelRequest extends SpeakeasyBase {
    pathParams: ReposGetCollaboratorPermissionLevelPathParams;
}
export declare class ReposGetCollaboratorPermissionLevelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;
}
