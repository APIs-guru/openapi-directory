import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSyslogConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateSyslogConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSyslogConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSyslogConfig;
}


export class UpdateSyslogConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  syslogConfig?: shared.SyslogConfig;
}
