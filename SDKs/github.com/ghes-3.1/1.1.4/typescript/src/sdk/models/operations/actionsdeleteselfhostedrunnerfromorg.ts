import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteSelfHostedRunnerFromOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsDeleteSelfHostedRunnerFromOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteSelfHostedRunnerFromOrgPathParams;
}


export class ActionsDeleteSelfHostedRunnerFromOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
