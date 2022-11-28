import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetSelfHostedRunnerForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsGetSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetSelfHostedRunnerForOrgPathParams;
}


export class ActionsGetSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerNoLabels?: shared.RunnerNoLabels;
}
