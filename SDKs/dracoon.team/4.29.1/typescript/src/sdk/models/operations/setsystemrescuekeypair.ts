import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetSystemRescueKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetSystemRescueKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetSystemRescueKeyPairHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserKeyPairContainer;
}


export class SetSystemRescueKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
