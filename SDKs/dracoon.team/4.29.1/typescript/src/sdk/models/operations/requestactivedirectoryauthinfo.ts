import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestActiveDirectoryAuthInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_global_available" })
  isGlobalAvailable?: boolean;
}


export class RequestActiveDirectoryAuthInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestActiveDirectoryAuthInfoQueryParams;
}


export class RequestActiveDirectoryAuthInfoResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryAuthInfo?: shared.ActiveDirectoryAuthInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
