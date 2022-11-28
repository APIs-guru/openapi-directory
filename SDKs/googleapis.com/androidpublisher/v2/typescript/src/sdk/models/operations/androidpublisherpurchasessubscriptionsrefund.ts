import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AndroidpublisherPurchasesSubscriptionsRefundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class AndroidpublisherPurchasesSubscriptionsRefundQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AndroidpublisherPurchasesSubscriptionsRefundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherPurchasesSubscriptionsRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AndroidpublisherPurchasesSubscriptionsRefundPathParams;

  @SpeakeasyMetadata()
  queryParams: AndroidpublisherPurchasesSubscriptionsRefundQueryParams;

  @SpeakeasyMetadata()
  security: AndroidpublisherPurchasesSubscriptionsRefundSecurity;
}


export class AndroidpublisherPurchasesSubscriptionsRefundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
