import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: number;
}


export class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams;
}


export class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
