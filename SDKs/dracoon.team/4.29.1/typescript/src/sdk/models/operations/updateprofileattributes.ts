import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProfileAttributesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateProfileAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateProfileAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProfileAttributesRequest;
}


export class UpdateProfileAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  profileAttributes?: shared.ProfileAttributes;

  @SpeakeasyMetadata()
  statusCode: number;
}
