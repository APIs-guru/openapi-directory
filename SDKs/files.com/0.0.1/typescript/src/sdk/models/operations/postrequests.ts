import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRequestsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=destination" })
  destination: string;

  @Metadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path: string;

  @Metadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;
}


export class PostRequestsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostRequestsRequestBody;
}


export class PostRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  requestEntity?: shared.RequestEntity;

  @Metadata()
  statusCode: number;
}
