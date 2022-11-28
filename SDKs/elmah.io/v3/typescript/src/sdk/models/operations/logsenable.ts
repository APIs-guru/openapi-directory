import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogsEnablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LogsEnableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LogsEnablePathParams;
}


export class LogsEnableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
