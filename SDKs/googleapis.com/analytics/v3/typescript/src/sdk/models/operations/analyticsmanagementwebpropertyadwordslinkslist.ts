import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementWebPropertyAdWordsLinksListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementWebPropertyAdWordsLinksListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start-index" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementWebPropertyAdWordsLinksListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2;
}


export class AnalyticsManagementWebPropertyAdWordsLinksListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementWebPropertyAdWordsLinksListPathParams;

  @Metadata()
  queryParams: AnalyticsManagementWebPropertyAdWordsLinksListQueryParams;

  @Metadata()
  security: AnalyticsManagementWebPropertyAdWordsLinksListSecurity;
}


export class AnalyticsManagementWebPropertyAdWordsLinksListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityAdWordsLinks?: shared.EntityAdWordsLinks;

  @Metadata()
  statusCode: number;
}
