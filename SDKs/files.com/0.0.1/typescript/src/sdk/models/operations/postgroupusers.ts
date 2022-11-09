import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGroupUsersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=admin" })
  admin?: boolean;

  @Metadata({ data: "multipart_form, name=group_id" })
  groupId: number;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId: number;
}


export class PostGroupUsersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostGroupUsersRequestBody;
}


export class PostGroupUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupUserEntity?: shared.GroupUserEntity;

  @Metadata()
  statusCode: number;
}
