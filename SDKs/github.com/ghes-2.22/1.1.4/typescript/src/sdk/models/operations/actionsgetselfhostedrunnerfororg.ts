import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetSelfHostedRunnerForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsGetSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetSelfHostedRunnerForOrgPathParams;
}


export class ActionsGetSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerNoLabels?: shared.RunnerNoLabels;
}
