import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteSelfHostedRunnerFromRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsDeleteSelfHostedRunnerFromRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteSelfHostedRunnerFromRepoPathParams;
}


export class ActionsDeleteSelfHostedRunnerFromRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
