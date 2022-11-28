import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminSyncLdapMappingForTeamPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class EnterpriseAdminSyncLdapMappingForTeamRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSyncLdapMappingForTeamPathParams;
}
export declare class EnterpriseAdminSyncLdapMappingForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminSyncLdapMappingForTeam201ApplicationJsonObject?: EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson;
}
