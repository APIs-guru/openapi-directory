import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsUpdateSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}

export enum ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}


export class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}


export class ActionsUpdateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsUpdateSelfHostedRunnerGroupForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
}


export class ActionsUpdateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
