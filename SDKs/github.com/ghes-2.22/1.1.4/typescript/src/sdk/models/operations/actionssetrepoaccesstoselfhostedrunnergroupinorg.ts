import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds: number[];
}


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
}


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
