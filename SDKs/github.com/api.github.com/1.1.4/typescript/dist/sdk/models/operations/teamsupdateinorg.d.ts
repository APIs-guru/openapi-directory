import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare enum TeamsUpdateInOrgRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare enum TeamsUpdateInOrgRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsUpdateInOrgRequestBody extends SpeakeasyBase {
    description?: string;
    name?: string;
    parentTeamId?: number;
    permission?: TeamsUpdateInOrgRequestBodyPermissionEnum;
    privacy?: TeamsUpdateInOrgRequestBodyPrivacyEnum;
}
export declare class TeamsUpdateInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateInOrgPathParams;
    request?: TeamsUpdateInOrgRequestBody;
}
export declare class TeamsUpdateInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamFull?: shared.TeamFull;
}
