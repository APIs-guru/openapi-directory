import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSessionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=otp" })
  otp?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=partial_session_id" })
  partialSessionId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostSessionsRequestBody;
}


export class PostSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionEntity?: shared.SessionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
