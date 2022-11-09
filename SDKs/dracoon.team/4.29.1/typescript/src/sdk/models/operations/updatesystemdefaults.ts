import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSystemDefaultsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateSystemDefaultsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSystemDefaultsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateSystemDefaults;
}


export class UpdateSystemDefaultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemDefaults?: shared.SystemDefaults;
}
