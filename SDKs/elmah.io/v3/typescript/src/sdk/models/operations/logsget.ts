import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LogsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LogsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LogsGetPathParams;
}


export class LogsGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  log?: shared.Log;

  @Metadata()
  statusCode: number;
}
