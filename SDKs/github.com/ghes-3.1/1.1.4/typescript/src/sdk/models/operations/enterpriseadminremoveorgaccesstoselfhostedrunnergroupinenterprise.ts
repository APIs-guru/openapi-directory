import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;
}


export class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
