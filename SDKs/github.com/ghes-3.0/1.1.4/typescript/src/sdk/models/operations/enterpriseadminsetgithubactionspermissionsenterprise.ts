import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_actions" })
  allowedActions?: shared.AllowedActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled_organizations" })
  enabledOrganizations: shared.EnabledOrganizationsEnum;
}


export class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
}


export class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
