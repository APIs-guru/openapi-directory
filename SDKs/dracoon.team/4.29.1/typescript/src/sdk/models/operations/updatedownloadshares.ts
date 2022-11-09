import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDownloadSharesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateDownloadSharesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateDownloadSharesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateDownloadSharesBulkRequest;
}


export class UpdateDownloadSharesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
