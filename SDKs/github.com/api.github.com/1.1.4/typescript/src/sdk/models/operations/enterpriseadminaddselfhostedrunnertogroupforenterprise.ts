import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams;
}


export class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
