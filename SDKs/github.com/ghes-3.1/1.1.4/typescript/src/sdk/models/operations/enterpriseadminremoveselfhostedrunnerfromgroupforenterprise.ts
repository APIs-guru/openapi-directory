import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams;
}


export class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
