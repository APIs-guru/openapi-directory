import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersMeSubscriptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class PostUsersMeSubscriptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostUsersMeSubscriptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersMeSubscriptionsRequestBody;

  @Metadata()
  security: PostUsersMeSubscriptionsSecurity;
}


export class PostUsersMeSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
