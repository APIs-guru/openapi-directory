import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerCreativesListDealsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=buyerCreativeId" })
  buyerCreativeId: string;
}


export class AdexchangebuyerCreativesListDealsQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerCreativesListDealsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerCreativesListDealsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerCreativesListDealsPathParams;

  @Metadata()
  queryParams: AdexchangebuyerCreativesListDealsQueryParams;

  @Metadata()
  security: AdexchangebuyerCreativesListDealsSecurity;
}


export class AdexchangebuyerCreativesListDealsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativeDealIds?: shared.CreativeDealIds;

  @Metadata()
  statusCode: number;
}
