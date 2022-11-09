import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsensehostAccountsAdunitsGetAdCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" })
  adUnitId: string;
}


export class AdsensehostAccountsAdunitsGetAdCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hostCustomChannelId" })
  hostCustomChannelId?: string[];

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


export class AdsensehostAccountsAdunitsGetAdCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsensehostAccountsAdunitsGetAdCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsensehostAccountsAdunitsGetAdCodePathParams;

  @Metadata()
  queryParams: AdsensehostAccountsAdunitsGetAdCodeQueryParams;

  @Metadata()
  security: AdsensehostAccountsAdunitsGetAdCodeSecurity;
}


export class AdsensehostAccountsAdunitsGetAdCodeResponse extends SpeakeasyBase {
  @Metadata()
  adCode?: shared.AdCode;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
