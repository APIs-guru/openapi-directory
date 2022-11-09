import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsListAuthorizationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OauthAuthorizationsListAuthorizationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OauthAuthorizationsListAuthorizationsQueryParams;
}


export class OauthAuthorizationsListAuthorizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Authorization })
  authorizations?: shared.Authorization[];

  @Metadata()
  basicError?: shared.BasicError;
}
