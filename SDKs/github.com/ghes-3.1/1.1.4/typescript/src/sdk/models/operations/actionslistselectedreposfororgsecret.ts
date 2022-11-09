import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListSelectedReposForOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsListSelectedReposForOrgSecretQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListSelectedReposForOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListSelectedReposForOrgSecretPathParams;

  @Metadata()
  queryParams: ActionsListSelectedReposForOrgSecretQueryParams;
}


export class ActionsListSelectedReposForOrgSecret200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=repositories", elemType: shared.MinimalRepository })
  repositories: shared.MinimalRepository[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListSelectedReposForOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListSelectedReposForOrgSecret200ApplicationJsonObject?: ActionsListSelectedReposForOrgSecret200ApplicationJson;
}
