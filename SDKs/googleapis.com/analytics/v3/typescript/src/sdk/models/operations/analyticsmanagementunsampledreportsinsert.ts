import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementUnsampledReportsInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementUnsampledReportsInsertQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementUnsampledReportsInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementUnsampledReportsInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementUnsampledReportsInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementUnsampledReportsInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementUnsampledReportsInsertSecurityOption2;
}


export class AnalyticsManagementUnsampledReportsInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementUnsampledReportsInsertPathParams;

  @Metadata()
  queryParams: AnalyticsManagementUnsampledReportsInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UnsampledReport;

  @Metadata()
  security: AnalyticsManagementUnsampledReportsInsertSecurity;
}


export class AnalyticsManagementUnsampledReportsInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsampledReport?: shared.UnsampledReport;
}
