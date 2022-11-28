import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestUserRolesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RequestUserRolesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestUserRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestUserRolesPathParams;

  @SpeakeasyMetadata()
  headers: RequestUserRolesHeaders;
}


export class RequestUserRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleList?: shared.RoleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
