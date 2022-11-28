import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds: number[];
}


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
}


export class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
