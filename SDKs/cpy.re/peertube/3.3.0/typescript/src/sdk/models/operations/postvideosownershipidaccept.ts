import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosOwnershipIdAcceptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosOwnershipIdAcceptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosOwnershipIdAcceptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosOwnershipIdAcceptPathParams;

  @Metadata()
  security: PostVideosOwnershipIdAcceptSecurity;
}


export class PostVideosOwnershipIdAcceptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
