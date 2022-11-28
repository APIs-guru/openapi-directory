import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchGroupUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchGroupUsersIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId: number;
}


export class PatchGroupUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchGroupUsersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchGroupUsersIdRequestBody;
}


export class PatchGroupUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupUserEntity?: shared.GroupUserEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
