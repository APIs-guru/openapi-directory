import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAlgorithmsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAlgorithmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestAlgorithmsHeaders;
}


export class RequestAlgorithmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  algorithmVersionInfoList?: shared.AlgorithmVersionInfoList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
