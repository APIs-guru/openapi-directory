import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LogsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LogsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LogsGetPathParams;
}


export class LogsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  log?: shared.Log;

  @SpeakeasyMetadata()
  statusCode: number;
}
