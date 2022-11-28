import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGroupsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=admin_ids" })
  adminIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;
}


export class PostGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostGroupsRequestBody;
}


export class PostGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupEntity?: shared.GroupEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
