import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LogsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createLog?: shared.CreateLog;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createLog1?: shared.CreateLog;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createLog2?: shared.CreateLog;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createLog3?: shared.CreateLog;
}


export class LogsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: LogsCreateRequests;
}


export class LogsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createLogResult?: shared.CreateLogResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
