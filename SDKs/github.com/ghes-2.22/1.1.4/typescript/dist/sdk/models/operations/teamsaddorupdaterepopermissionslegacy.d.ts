import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsAddOrUpdateRepoPermissionsLegacyPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody extends SpeakeasyBase {
    permission?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateRepoPermissionsLegacyPathParams;
    request?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
