import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDeleteSelfHostedRunnerFromRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsDeleteSelfHostedRunnerFromRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDeleteSelfHostedRunnerFromRepoPathParams;
}


export class ActionsDeleteSelfHostedRunnerFromRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
