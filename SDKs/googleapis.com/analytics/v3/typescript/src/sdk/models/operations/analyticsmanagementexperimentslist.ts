import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementExperimentsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementExperimentsListQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementExperimentsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementExperimentsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementExperimentsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementExperimentsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementExperimentsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementExperimentsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: AnalyticsManagementExperimentsListSecurityOption3;
}


export class AnalyticsManagementExperimentsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementExperimentsListPathParams;

  @Metadata()
  queryParams: AnalyticsManagementExperimentsListQueryParams;

  @Metadata()
  security: AnalyticsManagementExperimentsListSecurity;
}


export class AnalyticsManagementExperimentsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  experiments?: shared.Experiments;

  @Metadata()
  statusCode: number;
}
