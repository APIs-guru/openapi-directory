import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdatePathParams extends SpeakeasyBase {
    teamId: number;
}
export declare enum TeamsUpdateRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare enum TeamsUpdateRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsUpdateRequestBody extends SpeakeasyBase {
    description?: string;
    name?: string;
    parentTeamId?: number;
    permission?: TeamsUpdateRequestBodyPermissionEnum;
    privacy?: TeamsUpdateRequestBodyPrivacyEnum;
}
export declare class TeamsUpdateRequest extends SpeakeasyBase {
    pathParams: TeamsUpdatePathParams;
    request?: TeamsUpdateRequestBody;
}
export declare class TeamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamFull?: shared.TeamFull;
}
