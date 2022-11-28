import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchGroupsGroupIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class PatchGroupsGroupIdMembershipsUserIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=admin" })
  admin?: boolean;
}


export class PatchGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchGroupsGroupIdMembershipsUserIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchGroupsGroupIdMembershipsUserIdRequestBody;
}


export class PatchGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupUserEntity?: shared.GroupUserEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
