import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGroupUsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchGroupUsersIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=admin" })
  admin?: boolean;

  @Metadata({ data: "multipart_form, name=group_id" })
  groupId: number;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId: number;
}


export class PatchGroupUsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchGroupUsersIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchGroupUsersIdRequestBody;
}


export class PatchGroupUsersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupUserEntity?: shared.GroupUserEntity;

  @Metadata()
  statusCode: number;
}
