import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams;
}


export class EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsEnterprisePermissions?: shared.ActionsEnterprisePermissions;
}
