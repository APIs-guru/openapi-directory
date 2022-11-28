import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminCreateOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=profile_name" })
  profileName?: string;
}


export class EnterpriseAdminCreateOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateOrgRequestBody;
}


export class EnterpriseAdminCreateOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  organizationSimple?: shared.OrganizationSimple;
}
