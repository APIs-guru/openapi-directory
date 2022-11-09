import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdateLdapMappingForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminUpdateLdapMappingForUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;
}


export class EnterpriseAdminUpdateLdapMappingForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateLdapMappingForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateLdapMappingForUserRequestBody;
}


export class EnterpriseAdminUpdateLdapMappingForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ldapMappingUser?: shared.LdapMappingUser;
}
