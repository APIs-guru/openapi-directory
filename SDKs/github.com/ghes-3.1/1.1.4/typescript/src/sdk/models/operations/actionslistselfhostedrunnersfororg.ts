import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListSelfHostedRunnersForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListSelfHostedRunnersForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnersForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListSelfHostedRunnersForOrgPathParams;

  @Metadata()
  queryParams: ActionsListSelfHostedRunnersForOrgQueryParams;
}


export class ActionsListSelfHostedRunnersForOrg200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners", elemType: shared.Runner })
  runners: shared.Runner[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnersForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListSelfHostedRunnersForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnersForOrg200ApplicationJson;
}
