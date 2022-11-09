import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListRepoSecretsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListRepoSecretsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListRepoSecretsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListRepoSecretsPathParams;

  @Metadata()
  queryParams: ActionsListRepoSecretsQueryParams;
}


export class ActionsListRepoSecrets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=secrets", elemType: shared.ActionsSecret })
  secrets: shared.ActionsSecret[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListRepoSecretsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListRepoSecrets200ApplicationJsonObject?: ActionsListRepoSecrets200ApplicationJson;
}
