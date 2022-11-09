import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSyncLdapMappingForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminSyncLdapMappingForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSyncLdapMappingForUserPathParams;
}


export class EnterpriseAdminSyncLdapMappingForUser201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class EnterpriseAdminSyncLdapMappingForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminSyncLdapMappingForUser201ApplicationJsonObject?: EnterpriseAdminSyncLdapMappingForUser201ApplicationJson;
}
