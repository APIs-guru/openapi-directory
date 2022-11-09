import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams;
}


export class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
