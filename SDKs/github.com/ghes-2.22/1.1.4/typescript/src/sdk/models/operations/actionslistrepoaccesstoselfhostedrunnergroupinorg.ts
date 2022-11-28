import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories: shared.Repository[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams;
}


export class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJsonObject?: ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson;
}
