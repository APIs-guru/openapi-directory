import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFilesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateFilesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateFilesBulkRequest;
}


export class UpdateFilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
