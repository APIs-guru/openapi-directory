import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum {
    LevelFormatUnspecified = "LEVEL_FORMAT_UNSPECIFIED",
    AsDefined = "AS_DEFINED",
    Cel = "CEL"
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams;

  @SpeakeasyMetadata()
  security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity;
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gcpUserAccessBinding?: shared.GcpUserAccessBinding;

  @SpeakeasyMetadata()
  statusCode: number;
}
