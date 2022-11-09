import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsUpdateSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}

export enum ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected"
,    All = "all"
,    Private = "private"
}


export class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}


export class ActionsUpdateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsUpdateSelfHostedRunnerGroupForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
}


export class ActionsUpdateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
