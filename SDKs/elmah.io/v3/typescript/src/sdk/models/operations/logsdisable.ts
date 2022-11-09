import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogsDisablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LogsDisableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LogsDisablePathParams;
}


export class LogsDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
