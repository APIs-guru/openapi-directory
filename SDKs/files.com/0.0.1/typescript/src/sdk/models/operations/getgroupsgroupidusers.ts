import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupsGroupIdUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class GetGroupsGroupIdUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetGroupsGroupIdUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupsGroupIdUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGroupsGroupIdUsersQueryParams;
}


export class GetGroupsGroupIdUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupUserEntity })
  groupUserEntities?: shared.GroupUserEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
