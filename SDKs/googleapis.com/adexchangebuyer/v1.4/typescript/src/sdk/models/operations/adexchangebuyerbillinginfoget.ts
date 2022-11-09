import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerBillingInfoGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;
}


export class AdexchangebuyerBillingInfoGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerBillingInfoGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerBillingInfoGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerBillingInfoGetPathParams;

  @Metadata()
  queryParams: AdexchangebuyerBillingInfoGetQueryParams;

  @Metadata()
  security: AdexchangebuyerBillingInfoGetSecurity;
}


export class AdexchangebuyerBillingInfoGetResponse extends SpeakeasyBase {
  @Metadata()
  billingInfo?: shared.BillingInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
