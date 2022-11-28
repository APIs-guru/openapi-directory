import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestGroupMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class RequestGroupMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestGroupMembersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestGroupMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestGroupMembersQueryParams;

  @SpeakeasyMetadata()
  headers: RequestGroupMembersHeaders;
}


export class RequestGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  groupUserList?: shared.GroupUserList;

  @SpeakeasyMetadata()
  statusCode: number;
}
