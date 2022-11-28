import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsCreateSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}


export class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=runners" })
  runners?: number[];

  @SpeakeasyMetadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}


export class ActionsCreateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCreateSelfHostedRunnerGroupForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
}


export class ActionsCreateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
