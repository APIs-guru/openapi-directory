import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreatePathParams extends SpeakeasyBase {
    org: string;
}
export declare enum TeamsCreateRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare enum TeamsCreateRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsCreateRequestBody extends SpeakeasyBase {
    description?: string;
    maintainers?: string[];
    name: string;
    parentTeamId?: number;
    permission?: TeamsCreateRequestBodyPermissionEnum;
    privacy?: TeamsCreateRequestBodyPrivacyEnum;
    repoNames?: string[];
}
export declare class TeamsCreateRequest extends SpeakeasyBase {
    pathParams: TeamsCreatePathParams;
    request?: TeamsCreateRequestBody;
}
export declare class TeamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamFull?: shared.TeamFull;
    validationError?: shared.ValidationError;
}
