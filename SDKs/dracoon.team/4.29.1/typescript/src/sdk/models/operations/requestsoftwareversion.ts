import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSoftwareVersionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestSoftwareVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestSoftwareVersionHeaders;
}


export class RequestSoftwareVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  softwareVersionData?: shared.SoftwareVersionData;

  @SpeakeasyMetadata()
  statusCode: number;
}
