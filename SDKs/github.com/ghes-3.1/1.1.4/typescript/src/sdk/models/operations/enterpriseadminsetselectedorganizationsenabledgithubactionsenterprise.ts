import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=selected_organization_ids" })
  selectedOrganizationIds: number[];
}


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody;
}


export class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
