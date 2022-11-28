import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportsActivitiesWatchApplicationNameEnum {
    AccessTransparency = "access_transparency",
    Admin = "admin",
    Calendar = "calendar",
    Chat = "chat",
    Drive = "drive",
    Gcp = "gcp",
    Gplus = "gplus",
    Groups = "groups",
    GroupsEnterprise = "groups_enterprise",
    Jamboard = "jamboard",
    Login = "login",
    Meet = "meet",
    Mobile = "mobile",
    Rules = "rules",
    Saml = "saml",
    Token = "token",
    UserAccounts = "user_accounts",
    ContextAwareAccess = "context_aware_access",
    Chrome = "chrome",
    DataStudio = "data_studio",
    Keep = "keep"
}


export class ReportsActivitiesWatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationName" })
  applicationName: ReportsActivitiesWatchApplicationNameEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" })
  userKey: string;
}


export class ReportsActivitiesWatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actorIpAddress" })
  actorIpAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupIdFilter" })
  groupIdFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitID" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ReportsActivitiesWatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReportsActivitiesWatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportsActivitiesWatchPathParams;

  @SpeakeasyMetadata()
  queryParams: ReportsActivitiesWatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @SpeakeasyMetadata()
  security: ReportsActivitiesWatchSecurity;
}


export class ReportsActivitiesWatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channel?: shared.Channel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
