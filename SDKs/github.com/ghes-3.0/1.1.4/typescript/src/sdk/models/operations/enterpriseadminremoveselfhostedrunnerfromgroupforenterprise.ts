import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams;
}


export class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
