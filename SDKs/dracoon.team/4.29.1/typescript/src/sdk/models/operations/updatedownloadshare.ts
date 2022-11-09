import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDownloadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class UpdateDownloadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateDownloadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDownloadSharePathParams;

  @Metadata()
  headers: UpdateDownloadShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateDownloadShareRequest;
}


export class UpdateDownloadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadShare?: shared.DownloadShare;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDownloadShare400ApplicationJsonOneOf?: any;
}
