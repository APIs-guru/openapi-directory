import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: number;
}


export class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams;
}


export class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
