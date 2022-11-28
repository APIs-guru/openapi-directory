import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: number;
}


export class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams;
}


export class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
