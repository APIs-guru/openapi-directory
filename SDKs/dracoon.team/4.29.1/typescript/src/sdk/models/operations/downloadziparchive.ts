import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadZipArchiveHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class DownloadZipArchiveRequest extends SpeakeasyBase {
  @Metadata()
  headers: DownloadZipArchiveHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ZipDownloadRequest;
}


export class DownloadZipArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
