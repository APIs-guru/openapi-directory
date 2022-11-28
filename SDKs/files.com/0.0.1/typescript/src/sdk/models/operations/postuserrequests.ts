import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUserRequestsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;
}


export class PostUserRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostUserRequestsRequestBody;
}


export class PostUserRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userRequestEntity?: shared.UserRequestEntity;
}
