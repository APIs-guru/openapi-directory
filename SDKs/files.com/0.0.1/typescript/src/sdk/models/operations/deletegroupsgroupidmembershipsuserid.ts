import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupsGroupIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class DeleteGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGroupsGroupIdMembershipsUserIdPathParams;
}


export class DeleteGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
