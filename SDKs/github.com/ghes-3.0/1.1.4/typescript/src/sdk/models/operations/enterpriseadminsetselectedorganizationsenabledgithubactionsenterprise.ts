import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selected_organization_ids" })
  selectedOrganizationIds: number[];
}


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody;
}


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
