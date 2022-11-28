import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetSelfHostedRunnerForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsGetSelfHostedRunnerForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetSelfHostedRunnerForRepoPathParams;
}


export class ActionsGetSelfHostedRunnerForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerNoLabels?: shared.RunnerNoLabels;
}
