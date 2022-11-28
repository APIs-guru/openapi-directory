import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}


export class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
