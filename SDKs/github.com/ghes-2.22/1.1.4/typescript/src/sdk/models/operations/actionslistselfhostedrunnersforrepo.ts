import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListSelfHostedRunnersForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListSelfHostedRunnersForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelfHostedRunnersForRepo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels })
  runners: shared.RunnerNoLabels[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelfHostedRunnersForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListSelfHostedRunnersForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListSelfHostedRunnersForRepoQueryParams;
}


export class ActionsListSelfHostedRunnersForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListSelfHostedRunnersForRepo200ApplicationJsonObject?: ActionsListSelfHostedRunnersForRepo200ApplicationJson;
}
