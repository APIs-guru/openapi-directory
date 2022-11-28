import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListSelfHostedRunnerGroupsForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListSelfHostedRunnerGroupsForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runner_groups", elemType: shared.RunnerGroupsOrg })
  runnerGroups: shared.RunnerGroupsOrg[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnerGroupsForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListSelfHostedRunnerGroupsForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
}


export class ActionsListSelfHostedRunnerGroupsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListSelfHostedRunnerGroupsForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson;
}
