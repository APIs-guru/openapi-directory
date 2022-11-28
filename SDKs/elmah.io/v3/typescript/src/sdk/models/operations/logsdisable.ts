import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogsDisablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LogsDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LogsDisablePathParams;
}


export class LogsDisableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
