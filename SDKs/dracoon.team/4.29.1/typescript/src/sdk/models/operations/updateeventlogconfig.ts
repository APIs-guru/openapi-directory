import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEventlogConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateEventlogConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateEventlogConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateEventlogConfig;
}


export class UpdateEventlogConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  eventlogConfig?: shared.EventlogConfig;

  @Metadata()
  statusCode: number;
}
