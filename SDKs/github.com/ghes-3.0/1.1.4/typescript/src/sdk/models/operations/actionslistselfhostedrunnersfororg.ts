import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListSelfHostedRunnersForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListSelfHostedRunnersForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnersForOrg200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.Runner })
  runners: shared.Runner[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnersForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListSelfHostedRunnersForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListSelfHostedRunnersForOrgQueryParams;
}


export class ActionsListSelfHostedRunnersForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListSelfHostedRunnersForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnersForOrg200ApplicationJson;
}
