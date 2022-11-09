import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=selected_organization_ids" })
  selectedOrganizationIds: number[];
}


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;
}


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
