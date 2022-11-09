import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGroupsGroupIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class PatchGroupsGroupIdMembershipsUserIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=admin" })
  admin?: boolean;
}


export class PatchGroupsGroupIdMembershipsUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchGroupsGroupIdMembershipsUserIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchGroupsGroupIdMembershipsUserIdRequestBody;
}


export class PatchGroupsGroupIdMembershipsUserIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupUserEntity?: shared.GroupUserEntity;

  @Metadata()
  statusCode: number;
}
