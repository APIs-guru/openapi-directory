import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveOAuthAuthorizationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class RemoveOAuthAuthorizationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveOAuthAuthorizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveOAuthAuthorizationsPathParams;

  @SpeakeasyMetadata()
  headers: RemoveOAuthAuthorizationsHeaders;
}


export class RemoveOAuthAuthorizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
