import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseReportsSavedGeneratePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=savedReportId" })
  savedReportId: string;
}


export class AdsenseReportsSavedGenerateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseReportsSavedGenerateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseReportsSavedGenerateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseReportsSavedGenerateSecurityOption2;
}


export class AdsenseReportsSavedGenerateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseReportsSavedGeneratePathParams;

  @Metadata()
  queryParams: AdsenseReportsSavedGenerateQueryParams;

  @Metadata()
  security: AdsenseReportsSavedGenerateSecurity;
}


export class AdsenseReportsSavedGenerateResponse extends SpeakeasyBase {
  @Metadata()
  adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
