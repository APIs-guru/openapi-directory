import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGroupUsersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId: number;
}


export class PostGroupUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostGroupUsersRequestBody;
}


export class PostGroupUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupUserEntity?: shared.GroupUserEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
