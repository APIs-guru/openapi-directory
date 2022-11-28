import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPermissionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostPermissionsRequestBody;
}


export class PostPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionEntity?: shared.PermissionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
