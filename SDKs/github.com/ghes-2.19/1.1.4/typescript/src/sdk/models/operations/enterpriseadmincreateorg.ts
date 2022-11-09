import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminCreateOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin: string;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=profile_name" })
  profileName?: string;
}


export class EnterpriseAdminCreateOrgRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateOrgRequestBody;
}


export class EnterpriseAdminCreateOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  organizationSimple?: shared.OrganizationSimple;
}
