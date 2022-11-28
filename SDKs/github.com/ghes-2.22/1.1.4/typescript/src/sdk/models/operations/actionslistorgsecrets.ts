import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListOrgSecretsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListOrgSecretsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListOrgSecrets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: shared.OrganizationActionsSecret })
  secrets: shared.OrganizationActionsSecret[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListOrgSecretsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListOrgSecretsPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListOrgSecretsQueryParams;
}


export class ActionsListOrgSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListOrgSecrets200ApplicationJsonObject?: ActionsListOrgSecrets200ApplicationJson;
}
