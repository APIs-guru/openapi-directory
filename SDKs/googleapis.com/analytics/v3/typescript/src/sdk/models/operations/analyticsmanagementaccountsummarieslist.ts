import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementAccountSummariesListQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementAccountSummariesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementAccountSummariesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementAccountSummariesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementAccountSummariesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementAccountSummariesListSecurityOption2;
}


export class AnalyticsManagementAccountSummariesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AnalyticsManagementAccountSummariesListQueryParams;

  @Metadata()
  security: AnalyticsManagementAccountSummariesListSecurity;
}


export class AnalyticsManagementAccountSummariesListResponse extends SpeakeasyBase {
  @Metadata()
  accountSummaries?: shared.AccountSummaries;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
