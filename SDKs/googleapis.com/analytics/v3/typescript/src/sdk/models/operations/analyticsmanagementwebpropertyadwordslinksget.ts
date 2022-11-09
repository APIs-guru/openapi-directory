import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementWebPropertyAdWordsLinksGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyAdWordsLinkId" })
  webPropertyAdWordsLinkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementWebPropertyAdWordsLinksGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2;
}


export class AnalyticsManagementWebPropertyAdWordsLinksGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementWebPropertyAdWordsLinksGetPathParams;

  @Metadata()
  queryParams: AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams;

  @Metadata()
  security: AnalyticsManagementWebPropertyAdWordsLinksGetSecurity;
}


export class AnalyticsManagementWebPropertyAdWordsLinksGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityAdWordsLink?: shared.EntityAdWordsLink;

  @Metadata()
  statusCode: number;
}
