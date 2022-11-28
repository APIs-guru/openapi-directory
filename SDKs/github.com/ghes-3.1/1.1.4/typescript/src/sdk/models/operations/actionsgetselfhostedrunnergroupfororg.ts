import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsGetSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetSelfHostedRunnerGroupForOrgPathParams;
}


export class ActionsGetSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
