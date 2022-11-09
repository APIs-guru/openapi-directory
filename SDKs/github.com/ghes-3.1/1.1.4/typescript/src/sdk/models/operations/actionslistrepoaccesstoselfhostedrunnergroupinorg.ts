import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams;

  @Metadata()
  queryParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJsonObject?: ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson;
}
