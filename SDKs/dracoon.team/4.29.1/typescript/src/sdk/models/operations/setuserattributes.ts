import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetUserAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class SetUserAttributesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class SetUserAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetUserAttributesPathParams;

  @Metadata()
  headers: SetUserAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserAttributes;
}


export class SetUserAttributesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userData?: shared.UserData;
}
