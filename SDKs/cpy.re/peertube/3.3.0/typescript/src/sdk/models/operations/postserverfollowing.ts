import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostServerFollowingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=handles" })
  handles?: string[];

  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: string[];
}


export class PostServerFollowingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerFollowingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServerFollowingRequestBody;

  @SpeakeasyMetadata()
  security: PostServerFollowingSecurity;
}


export class PostServerFollowingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
