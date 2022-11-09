import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryChromeosdevicesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}

export enum DirectoryChromeosdevicesListOrderByEnum {
    AnnotatedLocation = "annotatedLocation"
,    AnnotatedUser = "annotatedUser"
,    LastSync = "lastSync"
,    Notes = "notes"
,    SerialNumber = "serialNumber"
,    Status = "status"
}

export enum DirectoryChromeosdevicesListProjectionEnum {
    Basic = "BASIC"
,    Full = "FULL"
}

export enum DirectoryChromeosdevicesListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DirectoryChromeosdevicesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeChildOrgunits" })
  includeChildOrgunits?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: DirectoryChromeosdevicesListOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orgUnitPath" })
  orgUnitPath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: DirectoryChromeosdevicesListProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DirectoryChromeosdevicesListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DirectoryChromeosdevicesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryChromeosdevicesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryChromeosdevicesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryChromeosdevicesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryChromeosdevicesListSecurityOption2;
}


export class DirectoryChromeosdevicesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryChromeosdevicesListPathParams;

  @Metadata()
  queryParams: DirectoryChromeosdevicesListQueryParams;

  @Metadata()
  security: DirectoryChromeosdevicesListSecurity;
}


export class DirectoryChromeosdevicesListResponse extends SpeakeasyBase {
  @Metadata()
  chromeOsDevices?: shared.ChromeOsDevices;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
