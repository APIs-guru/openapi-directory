import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListOrgSecretsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListOrgSecretsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListOrgSecretsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListOrgSecretsPathParams;

  @Metadata()
  queryParams: ActionsListOrgSecretsQueryParams;
}


export class ActionsListOrgSecrets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=secrets", elemType: shared.OrganizationActionsSecret })
  secrets: shared.OrganizationActionsSecret[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListOrgSecretsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListOrgSecrets200ApplicationJsonObject?: ActionsListOrgSecrets200ApplicationJson;
}
