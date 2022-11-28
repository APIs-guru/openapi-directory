import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestGroupRolesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class RequestGroupRolesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGroupRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestGroupRolesPathParams;

  @SpeakeasyMetadata()
  headers: RequestGroupRolesHeaders;
}


export class RequestGroupRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleList?: shared.RoleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
