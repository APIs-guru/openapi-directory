import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGroupsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=admin_ids" })
  adminIds?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=notes" })
  notes?: string;

  @Metadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;
}


export class PostGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostGroupsRequestBody;
}


export class PostGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupEntity?: shared.GroupEntity;

  @Metadata()
  statusCode: number;
}
