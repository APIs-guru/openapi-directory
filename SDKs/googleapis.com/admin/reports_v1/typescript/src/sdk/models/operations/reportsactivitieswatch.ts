import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReportsActivitiesWatchApplicationNameEnum {
    AccessTransparency = "access_transparency"
,    Admin = "admin"
,    Calendar = "calendar"
,    Chat = "chat"
,    Drive = "drive"
,    Gcp = "gcp"
,    Gplus = "gplus"
,    Groups = "groups"
,    GroupsEnterprise = "groups_enterprise"
,    Jamboard = "jamboard"
,    Login = "login"
,    Meet = "meet"
,    Mobile = "mobile"
,    Rules = "rules"
,    Saml = "saml"
,    Token = "token"
,    UserAccounts = "user_accounts"
,    ContextAwareAccess = "context_aware_access"
,    Chrome = "chrome"
,    DataStudio = "data_studio"
,    Keep = "keep"
}


export class ReportsActivitiesWatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationName" })
  applicationName: ReportsActivitiesWatchApplicationNameEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userKey" })
  userKey: string;
}


export class ReportsActivitiesWatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=actorIpAddress" })
  actorIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customerId" })
  customerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=eventName" })
  eventName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupIdFilter" })
  groupIdFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orgUnitID" })
  orgUnitId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ReportsActivitiesWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReportsActivitiesWatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReportsActivitiesWatchPathParams;

  @Metadata()
  queryParams: ReportsActivitiesWatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @Metadata()
  security: ReportsActivitiesWatchSecurity;
}


export class ReportsActivitiesWatchResponse extends SpeakeasyBase {
  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
