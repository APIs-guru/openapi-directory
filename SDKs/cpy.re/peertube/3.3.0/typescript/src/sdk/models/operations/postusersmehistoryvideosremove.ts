import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersMeHistoryVideosRemoveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=beforeDate" })
  beforeDate?: Date;
}


export class PostUsersMeHistoryVideosRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeHistoryVideosRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUsersMeHistoryVideosRemoveRequestBody;

  @SpeakeasyMetadata()
  security: PostUsersMeHistoryVideosRemoveSecurity;
}


export class PostUsersMeHistoryVideosRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
