import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GooglePaySubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GooglePaySubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GooglePaySubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GooglePaySubscriptionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvGooglePaySubscriptionRequest;

  @Metadata()
  security: GooglePaySubscriptionSecurity;
}


export class GooglePaySubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
