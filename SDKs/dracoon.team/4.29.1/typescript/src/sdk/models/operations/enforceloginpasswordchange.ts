import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnforceLoginPasswordChangeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class EnforceLoginPasswordChangeRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnforceLoginPasswordChangeHeaders;
}


export class EnforceLoginPasswordChangeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
