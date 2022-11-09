import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUploadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class UpdateUploadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateUploadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUploadSharePathParams;

  @Metadata()
  headers: UpdateUploadShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateUploadShareRequest;
}


export class UpdateUploadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadShare?: shared.UploadShare;

  @Metadata()
  updateUploadShare400ApplicationJsonOneOf?: any;
}
