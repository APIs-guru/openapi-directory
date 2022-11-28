import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsListAuthorizationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OauthAuthorizationsListAuthorizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OauthAuthorizationsListAuthorizationsQueryParams;
}


export class OauthAuthorizationsListAuthorizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Authorization })
  authorizations?: shared.Authorization[];

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
