import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminSyncLdapMappingForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminSyncLdapMappingForUser201ApplicationJson extends SpeakeasyBase {
    status?: string;
}
export declare class EnterpriseAdminSyncLdapMappingForUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSyncLdapMappingForUserPathParams;
}
export declare class EnterpriseAdminSyncLdapMappingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminSyncLdapMappingForUser201ApplicationJsonObject?: EnterpriseAdminSyncLdapMappingForUser201ApplicationJson;
}
