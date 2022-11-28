import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosOwnershipIdAcceptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosOwnershipIdAcceptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosOwnershipIdAcceptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosOwnershipIdAcceptPathParams;

  @SpeakeasyMetadata()
  security: PostVideosOwnershipIdAcceptSecurity;
}


export class PostVideosOwnershipIdAcceptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
