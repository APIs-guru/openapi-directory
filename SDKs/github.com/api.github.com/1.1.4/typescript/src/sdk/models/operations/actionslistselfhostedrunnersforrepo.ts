import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListSelfHostedRunnersForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListSelfHostedRunnersForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnersForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListSelfHostedRunnersForRepoPathParams;

  @Metadata()
  queryParams: ActionsListSelfHostedRunnersForRepoQueryParams;
}


export class ActionsListSelfHostedRunnersForRepo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners", elemType: shared.Runner })
  runners: shared.Runner[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnersForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListSelfHostedRunnersForRepo200ApplicationJsonObject?: ActionsListSelfHostedRunnersForRepo200ApplicationJson;
}
