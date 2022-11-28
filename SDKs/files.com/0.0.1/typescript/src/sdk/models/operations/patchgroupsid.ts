import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchGroupsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=admin_ids" })
  adminIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;
}


export class PatchGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchGroupsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchGroupsIdRequestBody;
}


export class PatchGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupEntity?: shared.GroupEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
