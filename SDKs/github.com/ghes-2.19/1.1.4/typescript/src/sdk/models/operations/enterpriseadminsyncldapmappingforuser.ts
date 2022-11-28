import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminSyncLdapMappingForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminSyncLdapMappingForUser201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class EnterpriseAdminSyncLdapMappingForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSyncLdapMappingForUserPathParams;
}


export class EnterpriseAdminSyncLdapMappingForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminSyncLdapMappingForUser201ApplicationJsonObject?: EnterpriseAdminSyncLdapMappingForUser201ApplicationJson;
}
