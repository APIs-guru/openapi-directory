import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;
}


export class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
