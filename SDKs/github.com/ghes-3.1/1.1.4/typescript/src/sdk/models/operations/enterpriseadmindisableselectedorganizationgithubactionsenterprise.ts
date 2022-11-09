import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: number;
}


export class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams;
}


export class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
