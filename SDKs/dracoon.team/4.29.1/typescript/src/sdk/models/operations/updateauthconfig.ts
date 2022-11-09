import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAuthConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateAuthConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAuthConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthConfig;
}


export class UpdateAuthConfigResponse extends SpeakeasyBase {
  @Metadata()
  authConfig?: shared.AuthConfig;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
