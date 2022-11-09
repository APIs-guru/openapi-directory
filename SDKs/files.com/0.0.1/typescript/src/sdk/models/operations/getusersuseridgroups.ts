import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserIdGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsersUserIdGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserIdGroupsPathParams;

  @Metadata()
  queryParams: GetUsersUserIdGroupsQueryParams;
}


export class GetUsersUserIdGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GroupUserEntity })
  groupUserEntities?: shared.GroupUserEntity[];

  @Metadata()
  statusCode: number;
}
