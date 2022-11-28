import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DirectoryUsersListEventEnum {
    Add = "add",
    Delete = "delete",
    MakeAdmin = "makeAdmin",
    Undelete = "undelete",
    Update = "update"
}

export enum DirectoryUsersListOrderByEnum {
    Email = "email",
    FamilyName = "familyName",
    GivenName = "givenName"
}

export enum DirectoryUsersListProjectionEnum {
    Basic = "basic",
    Custom = "custom",
    Full = "full"
}

export enum DirectoryUsersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}

export enum DirectoryUsersListViewTypeEnum {
    AdminView = "admin_view",
    DomainPublic = "domain_public"
}


export class DirectoryUsersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customFieldMask" })
  customFieldMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: DirectoryUsersListEventEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: DirectoryUsersListOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: DirectoryUsersListProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DirectoryUsersListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewType" })
  viewType?: DirectoryUsersListViewTypeEnum;
}


export class DirectoryUsersListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DirectoryUsersListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DirectoryUsersListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: DirectoryUsersListSecurityOption3;
}


export class DirectoryUsersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DirectoryUsersListQueryParams;

  @SpeakeasyMetadata()
  security: DirectoryUsersListSecurity;
}


export class DirectoryUsersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  users?: shared.Users;
}
