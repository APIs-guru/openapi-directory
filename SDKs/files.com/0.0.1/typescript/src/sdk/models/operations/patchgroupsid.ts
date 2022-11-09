import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchGroupsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=admin_ids" })
  adminIds?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=notes" })
  notes?: string;

  @Metadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;
}


export class PatchGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchGroupsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchGroupsIdRequestBody;
}


export class PatchGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupEntity?: shared.GroupEntity;

  @Metadata()
  statusCode: number;
}
