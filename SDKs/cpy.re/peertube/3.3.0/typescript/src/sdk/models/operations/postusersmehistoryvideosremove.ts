import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersMeHistoryVideosRemoveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=beforeDate" })
  beforeDate?: Date;
}


export class PostUsersMeHistoryVideosRemoveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeHistoryVideosRemoveRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUsersMeHistoryVideosRemoveRequestBody;

  @Metadata()
  security: PostUsersMeHistoryVideosRemoveSecurity;
}


export class PostUsersMeHistoryVideosRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
