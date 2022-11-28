import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdexchangebuyerCreativesAddDealPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buyerCreativeId" })
  buyerCreativeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dealId" })
  dealId: string;
}


export class AdexchangebuyerCreativesAddDealQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerCreativesAddDealSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerCreativesAddDealRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdexchangebuyerCreativesAddDealPathParams;

  @SpeakeasyMetadata()
  queryParams: AdexchangebuyerCreativesAddDealQueryParams;

  @SpeakeasyMetadata()
  security: AdexchangebuyerCreativesAddDealSecurity;
}


export class AdexchangebuyerCreativesAddDealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
