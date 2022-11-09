import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerPubprofilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;
}


export class AdexchangebuyerPubprofilesListQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerPubprofilesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerPubprofilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerPubprofilesListPathParams;

  @Metadata()
  queryParams: AdexchangebuyerPubprofilesListQueryParams;

  @Metadata()
  security: AdexchangebuyerPubprofilesListSecurity;
}


export class AdexchangebuyerPubprofilesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPublisherProfilesByAccountIdResponse?: shared.GetPublisherProfilesByAccountIdResponse;

  @Metadata()
  statusCode: number;
}
