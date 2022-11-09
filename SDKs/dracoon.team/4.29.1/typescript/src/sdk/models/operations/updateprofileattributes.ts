import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProfileAttributesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateProfileAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateProfileAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProfileAttributesRequest;
}


export class UpdateProfileAttributesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  profileAttributes?: shared.ProfileAttributes;

  @Metadata()
  statusCode: number;
}
