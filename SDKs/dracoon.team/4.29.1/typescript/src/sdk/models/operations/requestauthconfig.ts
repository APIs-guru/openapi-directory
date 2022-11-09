import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAuthConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAuthConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestAuthConfigHeaders;
}


export class RequestAuthConfigResponse extends SpeakeasyBase {
  @Metadata()
  authConfig?: shared.AuthConfig;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
