import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSystemInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_enabled" })
  isEnabled?: boolean;
}


export class RequestSystemInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestSystemInfoQueryParams;
}


export class RequestSystemInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemInfo?: shared.SystemInfo;
}
