import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsSetSelfHostedRunnersInGroupForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runners" })
  runners: number[];
}


export class ActionsSetSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetSelfHostedRunnersInGroupForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
}


export class ActionsSetSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
