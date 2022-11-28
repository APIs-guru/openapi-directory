import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare enum TeamsUpdateLegacyRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare enum TeamsUpdateLegacyRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsUpdateLegacyRequestBody extends SpeakeasyBase {
    description?: string;
    name: string;
    parentTeamId?: number;
    permission?: TeamsUpdateLegacyRequestBodyPermissionEnum;
    privacy?: TeamsUpdateLegacyRequestBodyPrivacyEnum;
}
export declare class TeamsUpdateLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateLegacyPathParams;
    request?: TeamsUpdateLegacyRequestBody;
}
export declare class TeamsUpdateLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamFull?: shared.TeamFull;
    validationError?: shared.ValidationError;
}
