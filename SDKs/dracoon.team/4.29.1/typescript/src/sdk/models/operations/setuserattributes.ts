import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetUserAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class SetUserAttributesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class SetUserAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetUserAttributesPathParams;

  @SpeakeasyMetadata()
  headers: SetUserAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserAttributes;
}


export class SetUserAttributesResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userData?: shared.UserDataOutput;
}
