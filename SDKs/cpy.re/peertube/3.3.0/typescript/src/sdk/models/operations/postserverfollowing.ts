import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostServerFollowingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=handles" })
  handles?: string[];

  @Metadata({ data: "json, name=hosts" })
  hosts?: string[];
}


export class PostServerFollowingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerFollowingRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServerFollowingRequestBody;

  @Metadata()
  security: PostServerFollowingSecurity;
}


export class PostServerFollowingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
