import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUserRequestsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=details" })
  details: string;

  @Metadata({ data: "multipart_form, name=email" })
  email: string;

  @Metadata({ data: "multipart_form, name=name" })
  name: string;
}


export class PostUserRequestsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostUserRequestsRequestBody;
}


export class PostUserRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userRequestEntity?: shared.UserRequestEntity;
}
