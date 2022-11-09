import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsGetSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetSelfHostedRunnerGroupForOrgPathParams;
}


export class ActionsGetSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
