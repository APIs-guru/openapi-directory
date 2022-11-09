import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListSelfHostedRunnerGroupsForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListSelfHostedRunnerGroupsForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnerGroupsForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListSelfHostedRunnerGroupsForOrgPathParams;

  @Metadata()
  queryParams: ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
}


export class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runner_groups", elemType: shared.RunnerGroupsOrg })
  runnerGroups: shared.RunnerGroupsOrg[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnerGroupsForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListSelfHostedRunnerGroupsForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson;
}
