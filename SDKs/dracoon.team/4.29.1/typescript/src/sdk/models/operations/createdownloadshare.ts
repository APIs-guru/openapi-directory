import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDownloadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CreateDownloadShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDownloadShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDownloadShareRequest;
}


export class CreateDownloadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadShare?: shared.DownloadShare;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDownloadShare400ApplicationJsonOneOf?: any;
}
