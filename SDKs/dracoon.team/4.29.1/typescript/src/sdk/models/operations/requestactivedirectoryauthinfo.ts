import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestActiveDirectoryAuthInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_global_available" })
  isGlobalAvailable?: boolean;
}


export class RequestActiveDirectoryAuthInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestActiveDirectoryAuthInfoQueryParams;
}


export class RequestActiveDirectoryAuthInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryAuthInfo?: shared.ActiveDirectoryAuthInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
