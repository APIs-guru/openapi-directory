import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementUploadsDeleteUploadDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=customDataSourceId" })
  customDataSourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementUploadsDeleteUploadDataQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementUploadsDeleteUploadDataSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementUploadsDeleteUploadDataSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementUploadsDeleteUploadDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsManagementUploadsDeleteUploadDataSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsManagementUploadsDeleteUploadDataSecurityOption2;
}


export class AnalyticsManagementUploadsDeleteUploadDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementUploadsDeleteUploadDataPathParams;

  @Metadata()
  queryParams: AnalyticsManagementUploadsDeleteUploadDataQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AnalyticsDataimportDeleteUploadDataRequest;

  @Metadata()
  security: AnalyticsManagementUploadsDeleteUploadDataSecurity;
}


export class AnalyticsManagementUploadsDeleteUploadDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
