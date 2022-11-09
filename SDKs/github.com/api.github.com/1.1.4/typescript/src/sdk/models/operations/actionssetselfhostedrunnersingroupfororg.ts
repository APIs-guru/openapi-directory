import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsSetSelfHostedRunnersInGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners" })
  runners: number[];
}


export class ActionsSetSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetSelfHostedRunnersInGroupForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
}


export class ActionsSetSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
