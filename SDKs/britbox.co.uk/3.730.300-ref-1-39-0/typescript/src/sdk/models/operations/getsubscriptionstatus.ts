import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetSubscriptionStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetSubscriptionStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetSubscriptionStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionStatusPathParams;

  @Metadata()
  queryParams: GetSubscriptionStatusQueryParams;

  @Metadata()
  security: GetSubscriptionStatusSecurity;
}


export class GetSubscriptionStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvSubscriptionStatusResponse?: shared.ItvSubscriptionStatusResponse;

  @Metadata()
  statusCode: number;
}
