import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListRepoSecretsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListRepoSecretsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListRepoSecrets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.ActionsSecret })
  secrets: shared.ActionsSecret[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListRepoSecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListRepoSecretsPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListRepoSecretsQueryParams;
}


export class ActionsListRepoSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListRepoSecrets200ApplicationJsonObject?: ActionsListRepoSecrets200ApplicationJson;
}
