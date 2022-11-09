import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestEventlogConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestEventlogConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestEventlogConfigHeaders;
}


export class RequestEventlogConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  eventlogConfig?: shared.EventlogConfig;

  @Metadata()
  statusCode: number;
}
