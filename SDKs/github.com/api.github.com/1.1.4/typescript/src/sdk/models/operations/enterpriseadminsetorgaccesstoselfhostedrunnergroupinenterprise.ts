import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selected_organization_ids" })
  selectedOrganizationIds: number[];
}


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;
}


export class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
