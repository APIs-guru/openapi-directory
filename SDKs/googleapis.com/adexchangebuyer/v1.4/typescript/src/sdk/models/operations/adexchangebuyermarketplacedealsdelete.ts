import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdexchangebuyerMarketplacedealsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;
}


export class AdexchangebuyerMarketplacedealsDeleteQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerMarketplacedealsDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerMarketplacedealsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdexchangebuyerMarketplacedealsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: AdexchangebuyerMarketplacedealsDeleteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DeleteOrderDealsRequest;

  @SpeakeasyMetadata()
  security: AdexchangebuyerMarketplacedealsDeleteSecurity;
}


export class AdexchangebuyerMarketplacedealsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteOrderDealsResponse?: shared.DeleteOrderDealsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
