import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListSelfHostedRunnersInGroupForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class ActionsListSelfHostedRunnersInGroupForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels })
  runners: shared.RunnerNoLabels[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListSelfHostedRunnersInGroupForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListSelfHostedRunnersInGroupForOrgQueryParams;
}


export class ActionsListSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListSelfHostedRunnersInGroupForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson;
}
