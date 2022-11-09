import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSessionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=otp" })
  otp?: string;

  @Metadata({ data: "multipart_form, name=partial_session_id" })
  partialSessionId?: string;

  @Metadata({ data: "multipart_form, name=password" })
  password?: string;

  @Metadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostSessionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostSessionsRequestBody;
}


export class PostSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sessionEntity?: shared.SessionEntity;

  @Metadata()
  statusCode: number;
}
