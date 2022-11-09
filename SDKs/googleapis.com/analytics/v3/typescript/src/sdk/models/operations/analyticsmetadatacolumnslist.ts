import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsMetadataColumnsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reportType" })
  reportType: string;
}


export class AnalyticsMetadataColumnsListQueryParams extends SpeakeasyBase {
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


export class AnalyticsMetadataColumnsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsMetadataColumnsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsMetadataColumnsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsMetadataColumnsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticsMetadataColumnsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticsMetadataColumnsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: AnalyticsMetadataColumnsListSecurityOption3;
}


export class AnalyticsMetadataColumnsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsMetadataColumnsListPathParams;

  @Metadata()
  queryParams: AnalyticsMetadataColumnsListQueryParams;

  @Metadata()
  security: AnalyticsMetadataColumnsListSecurity;
}


export class AnalyticsMetadataColumnsListResponse extends SpeakeasyBase {
  @Metadata()
  columns?: shared.Columns;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
