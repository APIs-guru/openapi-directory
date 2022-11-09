import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}


export class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
