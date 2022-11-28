import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosIdGiveOwnershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosIdGiveOwnershipRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=username;" })
  username: string;
}


export class PostVideosIdGiveOwnershipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosIdGiveOwnershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosIdGiveOwnershipPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostVideosIdGiveOwnershipRequestBody;

  @SpeakeasyMetadata()
  security: PostVideosIdGiveOwnershipSecurity;
}


export class PostVideosIdGiveOwnershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
