import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSystemInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_enabled" })
  isEnabled?: boolean;
}


export class RequestSystemInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestSystemInfoQueryParams;
}


export class RequestSystemInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemInfo?: shared.SystemInfo;
}
