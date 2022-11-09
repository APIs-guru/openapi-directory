import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosIdGiveOwnershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosIdGiveOwnershipRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=username;" })
  username: string;
}


export class PostVideosIdGiveOwnershipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosIdGiveOwnershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosIdGiveOwnershipPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostVideosIdGiveOwnershipRequestBody;

  @Metadata()
  security: PostVideosIdGiveOwnershipSecurity;
}


export class PostVideosIdGiveOwnershipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
