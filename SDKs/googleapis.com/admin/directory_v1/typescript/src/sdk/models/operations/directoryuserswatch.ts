import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DirectoryUsersWatchEventEnum {
    Add = "add"
,    Delete = "delete"
,    MakeAdmin = "makeAdmin"
,    Undelete = "undelete"
,    Update = "update"
}

export enum DirectoryUsersWatchOrderByEnum {
    Email = "email"
,    FamilyName = "familyName"
,    GivenName = "givenName"
}

export enum DirectoryUsersWatchProjectionEnum {
    Basic = "basic"
,    Custom = "custom"
,    Full = "full"
}

export enum DirectoryUsersWatchSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}

export enum DirectoryUsersWatchViewTypeEnum {
    AdminView = "admin_view"
,    DomainPublic = "domain_public"
}


export class DirectoryUsersWatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customFieldMask" })
  customFieldMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customer" })
  customer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: DirectoryUsersWatchEventEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: DirectoryUsersWatchOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: DirectoryUsersWatchProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DirectoryUsersWatchSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=viewType" })
  viewType?: DirectoryUsersWatchViewTypeEnum;
}


export class DirectoryUsersWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersWatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryUsersWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryUsersWatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DirectoryUsersWatchSecurityOption3;
}


export class DirectoryUsersWatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DirectoryUsersWatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @Metadata()
  security: DirectoryUsersWatchSecurity;
}


export class DirectoryUsersWatchResponse extends SpeakeasyBase {
  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
