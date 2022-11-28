import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdateLdapMappingForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminUpdateLdapMappingForUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;
}


export class EnterpriseAdminUpdateLdapMappingForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateLdapMappingForUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateLdapMappingForUserRequestBody;
}


export class EnterpriseAdminUpdateLdapMappingForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ldapMappingUser?: shared.LdapMappingUser;
}
