import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPermissionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=group_id" })
  groupId?: number;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=permission" })
  permission?: string;

  @Metadata({ data: "multipart_form, name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;

  @Metadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostPermissionsRequestBody;
}


export class PostPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  permissionEntity?: shared.PermissionEntity;

  @Metadata()
  statusCode: number;
}
