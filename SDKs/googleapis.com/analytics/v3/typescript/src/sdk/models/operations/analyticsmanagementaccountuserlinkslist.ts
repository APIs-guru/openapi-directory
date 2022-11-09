import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementAccountUserLinksListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AnalyticsManagementAccountUserLinksListQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementAccountUserLinksListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementAccountUserLinksListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementAccountUserLinksListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementAccountUserLinksListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementAccountUserLinksListSecurityOption2;
}


export class AnalyticsManagementAccountUserLinksListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementAccountUserLinksListPathParams;

  @Metadata()
  queryParams: AnalyticsManagementAccountUserLinksListQueryParams;

  @Metadata()
  security: AnalyticsManagementAccountUserLinksListSecurity;
}


export class AnalyticsManagementAccountUserLinksListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityUserLinks?: shared.EntityUserLinks;

  @Metadata()
  statusCode: number;
}
