import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDeleteSelfHostedRunnerFromOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class ActionsDeleteSelfHostedRunnerFromOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDeleteSelfHostedRunnerFromOrgPathParams;
}


export class ActionsDeleteSelfHostedRunnerFromOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
