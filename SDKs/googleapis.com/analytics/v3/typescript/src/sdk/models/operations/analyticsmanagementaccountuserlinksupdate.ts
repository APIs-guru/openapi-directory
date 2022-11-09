import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticsManagementAccountUserLinksUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linkId" })
  linkId: string;
}


export class AnalyticsManagementAccountUserLinksUpdateQueryParams extends SpeakeasyBase {
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


export class AnalyticsManagementAccountUserLinksUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementAccountUserLinksUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticsManagementAccountUserLinksUpdatePathParams;

  @Metadata()
  queryParams: AnalyticsManagementAccountUserLinksUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.EntityUserLink;

  @Metadata()
  security: AnalyticsManagementAccountUserLinksUpdateSecurity;
}


export class AnalyticsManagementAccountUserLinksUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityUserLink?: shared.EntityUserLink;

  @Metadata()
  statusCode: number;
}
