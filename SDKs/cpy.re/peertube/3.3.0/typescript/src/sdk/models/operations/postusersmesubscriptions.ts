import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersMeSubscriptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class PostUsersMeSubscriptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersMeSubscriptionsRequestBody;

  @SpeakeasyMetadata()
  security: PostUsersMeSubscriptionsSecurity;
}


export class PostUsersMeSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
