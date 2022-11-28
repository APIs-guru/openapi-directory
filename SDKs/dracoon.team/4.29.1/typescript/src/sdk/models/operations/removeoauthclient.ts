import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveOAuthClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class RemoveOAuthClientHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveOAuthClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveOAuthClientPathParams;

  @SpeakeasyMetadata()
  headers: RemoveOAuthClientHeaders;
}


export class RemoveOAuthClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
