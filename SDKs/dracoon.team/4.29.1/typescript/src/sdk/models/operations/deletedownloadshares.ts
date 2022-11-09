import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDownloadSharesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class DeleteDownloadSharesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDownloadSharesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDownloadSharesRequest;
}


export class DeleteDownloadSharesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
