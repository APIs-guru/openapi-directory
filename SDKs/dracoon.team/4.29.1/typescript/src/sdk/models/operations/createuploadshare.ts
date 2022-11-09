import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUploadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CreateUploadShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUploadShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUploadShareRequest;
}


export class CreateUploadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadShare?: shared.UploadShare;

  @Metadata()
  createUploadShare400ApplicationJsonOneOf?: any;
}
