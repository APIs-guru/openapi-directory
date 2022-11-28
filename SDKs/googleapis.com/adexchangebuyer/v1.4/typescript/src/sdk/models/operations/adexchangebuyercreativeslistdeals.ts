import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdexchangebuyerCreativesListDealsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buyerCreativeId" })
  buyerCreativeId: string;
}


export class AdexchangebuyerCreativesListDealsQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerCreativesListDealsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerCreativesListDealsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdexchangebuyerCreativesListDealsPathParams;

  @SpeakeasyMetadata()
  queryParams: AdexchangebuyerCreativesListDealsQueryParams;

  @SpeakeasyMetadata()
  security: AdexchangebuyerCreativesListDealsSecurity;
}


export class AdexchangebuyerCreativesListDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  creativeDealIds?: shared.CreativeDealIds;

  @SpeakeasyMetadata()
  statusCode: number;
}
