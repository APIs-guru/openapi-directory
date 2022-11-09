import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsDeleteSelfHostedRunnerGroupFromOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams;
}


export class ActionsDeleteSelfHostedRunnerGroupFromOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
