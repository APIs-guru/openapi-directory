import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsAddSelfHostedRunnerToGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsAddSelfHostedRunnerToGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsAddSelfHostedRunnerToGroupForOrgPathParams;
}


export class ActionsAddSelfHostedRunnerToGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
