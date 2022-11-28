import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAuthConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateAuthConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAuthConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AuthConfig;
}


export class UpdateAuthConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authConfig?: shared.AuthConfig;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
