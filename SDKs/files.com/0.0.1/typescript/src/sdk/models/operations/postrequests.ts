import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRequestsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_ids" })
  userIds?: string;
}


export class PostRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostRequestsRequestBody;
}


export class PostRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  requestEntity?: shared.RequestEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
