import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsListGrantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OauthAuthorizationsListGrantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OauthAuthorizationsListGrantsQueryParams;
}


export class OauthAuthorizationsListGrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ApplicationGrant })
  applicationGrants?: shared.ApplicationGrant[];

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
