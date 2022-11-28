import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetSubscriptionStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetSubscriptionStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetSubscriptionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubscriptionStatusQueryParams;

  @SpeakeasyMetadata()
  security: GetSubscriptionStatusSecurity;
}


export class GetSubscriptionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvSubscriptionStatusResponse?: shared.ItvSubscriptionStatusResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
