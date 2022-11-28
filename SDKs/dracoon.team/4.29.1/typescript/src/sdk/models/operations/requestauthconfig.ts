import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAuthConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAuthConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestAuthConfigHeaders;
}


export class RequestAuthConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authConfig?: shared.AuthConfig;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
