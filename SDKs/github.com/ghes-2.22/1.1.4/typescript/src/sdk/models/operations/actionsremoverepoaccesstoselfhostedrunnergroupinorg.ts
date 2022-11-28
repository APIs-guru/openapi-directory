import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}


export class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
