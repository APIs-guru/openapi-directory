import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsCreateSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected"
,    All = "all"
,    Private = "private"
}


export class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=runners" })
  runners?: number[];

  @Metadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds?: number[];

  @Metadata({ data: "json, name=visibility" })
  visibility?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}


export class ActionsCreateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateSelfHostedRunnerGroupForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
}


export class ActionsCreateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
