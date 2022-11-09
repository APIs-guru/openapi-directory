import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LogsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createLog?: shared.CreateLog;

  @Metadata({ data: "request, media_type=application/json" })
  createLog1?: shared.CreateLog;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createLog2?: shared.CreateLog;

  @Metadata({ data: "request, media_type=text/json" })
  createLog3?: shared.CreateLog;
}


export class LogsCreateRequest extends SpeakeasyBase {
  @Metadata()
  request?: LogsCreateRequests;
}


export class LogsCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  createLogResult?: shared.CreateLogResult;

  @Metadata()
  statusCode: number;
}
