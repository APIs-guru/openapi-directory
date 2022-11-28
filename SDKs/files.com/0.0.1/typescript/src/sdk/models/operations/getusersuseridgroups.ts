import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserIdGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsersUserIdGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersUserIdGroupsQueryParams;
}


export class GetUsersUserIdGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupUserEntity })
  groupUserEntities?: shared.GroupUserEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
