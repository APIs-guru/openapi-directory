import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogsEnablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LogsEnableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LogsEnablePathParams;
}


export class LogsEnableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
