import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}


export class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
