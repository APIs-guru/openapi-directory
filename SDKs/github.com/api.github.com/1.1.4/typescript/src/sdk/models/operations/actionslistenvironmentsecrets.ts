import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListEnvironmentSecretsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsListEnvironmentSecretsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListEnvironmentSecrets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.ActionsSecret })
  secrets: shared.ActionsSecret[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListEnvironmentSecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListEnvironmentSecretsPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListEnvironmentSecretsQueryParams;
}


export class ActionsListEnvironmentSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListEnvironmentSecrets200ApplicationJsonObject?: ActionsListEnvironmentSecrets200ApplicationJson;
}
