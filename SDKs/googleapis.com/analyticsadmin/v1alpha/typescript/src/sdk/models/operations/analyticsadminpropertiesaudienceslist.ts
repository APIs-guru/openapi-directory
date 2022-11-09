import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsadminPropertiesAudiencesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class AnalyticsadminPropertiesAudiencesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AnalyticsadminPropertiesAudiencesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsadminPropertiesAudiencesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsadminPropertiesAudiencesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsadminPropertiesAudiencesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsadminPropertiesAudiencesListSecurityOption2;
}


export class AnalyticsadminPropertiesAudiencesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsadminPropertiesAudiencesListPathParams;

  @Metadata()
  queryParams: AnalyticsadminPropertiesAudiencesListQueryParams;

  @Metadata()
  security: AnalyticsadminPropertiesAudiencesListSecurity;
}


export class AnalyticsadminPropertiesAudiencesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleAnalyticsAdminV1alphaListAudiencesResponse?: shared.GoogleAnalyticsAdminV1alphaListAudiencesResponse;

  @Metadata()
  statusCode: number;
}
