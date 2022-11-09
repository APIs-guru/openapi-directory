import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListEnvironmentSecretsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsListEnvironmentSecretsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListEnvironmentSecretsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListEnvironmentSecretsPathParams;

  @Metadata()
  queryParams: ActionsListEnvironmentSecretsQueryParams;
}


export class ActionsListEnvironmentSecrets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=secrets", elemType: shared.ActionsSecret })
  secrets: shared.ActionsSecret[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListEnvironmentSecretsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListEnvironmentSecrets200ApplicationJsonObject?: ActionsListEnvironmentSecrets200ApplicationJson;
}
