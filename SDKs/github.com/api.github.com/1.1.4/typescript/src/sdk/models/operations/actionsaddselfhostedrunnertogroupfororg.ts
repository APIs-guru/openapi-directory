import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsAddSelfHostedRunnerToGroupForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsAddSelfHostedRunnerToGroupForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsAddSelfHostedRunnerToGroupForOrgPathParams;
}


export class ActionsAddSelfHostedRunnerToGroupForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
