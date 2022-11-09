import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupsGroupIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class DeleteGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGroupsGroupIdMembershipsUserIdPathParams;
}


export class DeleteGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
