import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestLogOperationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_deprecated" })
  isDeprecated?: boolean;
}


export class RequestLogOperationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLogOperationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestLogOperationsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestLogOperationsHeaders;
}


export class RequestLogOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  logOperationList?: shared.LogOperationList;

  @SpeakeasyMetadata()
  statusCode: number;
}
