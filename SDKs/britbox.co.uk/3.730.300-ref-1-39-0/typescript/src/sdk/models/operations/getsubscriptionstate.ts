import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionStateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetSubscriptionStateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetSubscriptionStateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSubscriptionStateQueryParams;

  @Metadata()
  security: GetSubscriptionStateSecurity;
}


export class GetSubscriptionStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvSubscriptionState?: shared.ItvSubscriptionState;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
