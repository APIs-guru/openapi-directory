import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestUserFileKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class RequestUserFileKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestUserFileKeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestUserFileKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestUserFileKeyPathParams;

  @Metadata()
  queryParams: RequestUserFileKeyQueryParams;

  @Metadata()
  headers: RequestUserFileKeyHeaders;
}


export class RequestUserFileKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fileKey?: shared.FileKey;

  @Metadata()
  statusCode: number;
}
