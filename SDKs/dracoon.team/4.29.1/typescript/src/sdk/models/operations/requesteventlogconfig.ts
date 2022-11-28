import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestEventlogConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestEventlogConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestEventlogConfigHeaders;
}


export class RequestEventlogConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  eventlogConfig?: shared.EventlogConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
