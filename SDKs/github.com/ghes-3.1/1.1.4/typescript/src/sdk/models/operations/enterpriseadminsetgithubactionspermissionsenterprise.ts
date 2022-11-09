import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_actions" })
  allowedActions?: shared.AllowedActionsEnum;

  @Metadata({ data: "json, name=enabled_organizations" })
  enabledOrganizations: shared.EnabledOrganizationsEnum;
}


export class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
}


export class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
