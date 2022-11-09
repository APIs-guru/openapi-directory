import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams;
}


export class ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
