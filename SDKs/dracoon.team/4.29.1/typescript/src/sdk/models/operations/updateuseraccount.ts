import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserAccountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateUserAccountRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateUserAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUserAccountRequest;
}


export class UpdateUserAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userAccount?: shared.UserAccount;
}
