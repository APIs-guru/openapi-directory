import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListSelectedReposForOrgSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsListSelectedReposForOrgSecretQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelectedReposForOrgSecret200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.MinimalRepository })
  repositories: shared.MinimalRepository[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelectedReposForOrgSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListSelectedReposForOrgSecretPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListSelectedReposForOrgSecretQueryParams;
}


export class ActionsListSelectedReposForOrgSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListSelectedReposForOrgSecret200ApplicationJsonObject?: ActionsListSelectedReposForOrgSecret200ApplicationJson;
}
