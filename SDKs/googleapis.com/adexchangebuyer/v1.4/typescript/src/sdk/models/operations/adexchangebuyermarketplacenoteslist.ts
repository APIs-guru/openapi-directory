import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdexchangebuyerMarketplacenotesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;
}


export class AdexchangebuyerMarketplacenotesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pqlQuery" })
  pqlQuery?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerMarketplacenotesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerMarketplacenotesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdexchangebuyerMarketplacenotesListPathParams;

  @SpeakeasyMetadata()
  queryParams: AdexchangebuyerMarketplacenotesListQueryParams;

  @SpeakeasyMetadata()
  security: AdexchangebuyerMarketplacenotesListSecurity;
}


export class AdexchangebuyerMarketplacenotesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOrderNotesResponse?: shared.GetOrderNotesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
