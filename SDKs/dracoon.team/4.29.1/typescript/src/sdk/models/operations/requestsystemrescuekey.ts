import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSystemRescueKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class RequestSystemRescueKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestSystemRescueKeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestSystemRescueKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestSystemRescueKeyPathParams;

  @Metadata()
  queryParams: RequestSystemRescueKeyQueryParams;

  @Metadata()
  headers: RequestSystemRescueKeyHeaders;
}


export class RequestSystemRescueKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fileKey?: shared.FileKey;

  @Metadata()
  statusCode: number;
}
