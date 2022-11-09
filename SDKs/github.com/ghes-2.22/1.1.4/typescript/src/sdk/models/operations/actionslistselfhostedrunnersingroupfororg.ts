import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListSelfHostedRunnersInGroupForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsListSelfHostedRunnersInGroupForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListSelfHostedRunnersInGroupForOrgPathParams;

  @Metadata()
  queryParams: ActionsListSelfHostedRunnersInGroupForOrgQueryParams;
}


export class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels })
  runners: shared.RunnerNoLabels[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListSelfHostedRunnersInGroupForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson;
}
