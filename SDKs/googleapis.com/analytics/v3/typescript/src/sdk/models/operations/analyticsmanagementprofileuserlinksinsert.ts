import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementProfileUserLinksInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementProfileUserLinksInsertQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementProfileUserLinksInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementProfileUserLinksInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementProfileUserLinksInsertPathParams;

  @Metadata()
  queryParams: AnalyticsManagementProfileUserLinksInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.EntityUserLink;

  @Metadata()
  security: AnalyticsManagementProfileUserLinksInsertSecurity;
}


export class AnalyticsManagementProfileUserLinksInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityUserLink?: shared.EntityUserLink;

  @Metadata()
  statusCode: number;
}
