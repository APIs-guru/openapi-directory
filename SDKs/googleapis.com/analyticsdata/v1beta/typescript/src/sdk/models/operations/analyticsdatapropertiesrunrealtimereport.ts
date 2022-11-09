import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsdataPropertiesRunRealtimeReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=property" })
  property: string;
}


export class AnalyticsdataPropertiesRunRealtimeReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AnalyticsdataPropertiesRunRealtimeReportSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsdataPropertiesRunRealtimeReportSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsdataPropertiesRunRealtimeReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsdataPropertiesRunRealtimeReportSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsdataPropertiesRunRealtimeReportSecurityOption2;
}


export class AnalyticsdataPropertiesRunRealtimeReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsdataPropertiesRunRealtimeReportPathParams;

  @Metadata()
  queryParams: AnalyticsdataPropertiesRunRealtimeReportQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RunRealtimeReportRequest;

  @Metadata()
  security: AnalyticsdataPropertiesRunRealtimeReportSecurity;
}


export class AnalyticsdataPropertiesRunRealtimeReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  runRealtimeReportResponse?: shared.RunRealtimeReportResponse;

  @Metadata()
  statusCode: number;
}
