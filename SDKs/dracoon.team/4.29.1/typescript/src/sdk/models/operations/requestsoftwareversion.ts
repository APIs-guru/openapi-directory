import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSoftwareVersionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestSoftwareVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestSoftwareVersionHeaders;
}


export class RequestSoftwareVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  softwareVersionData?: shared.SoftwareVersionData;

  @Metadata()
  statusCode: number;
}
