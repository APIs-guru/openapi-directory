import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAlgorithmsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAlgorithmsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestAlgorithmsHeaders;
}


export class RequestAlgorithmsResponse extends SpeakeasyBase {
  @Metadata()
  algorithmVersionInfoList?: shared.AlgorithmVersionInfoList;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
