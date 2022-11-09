import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum {
    LevelFormatUnspecified = "LEVEL_FORMAT_UNSPECIFIED"
,    AsDefined = "AS_DEFINED"
,    Cel = "CEL"
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum;

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


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams;

  @Metadata()
  queryParams: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams;

  @Metadata()
  security: AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity;
}


export class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  gcpUserAccessBinding?: shared.GcpUserAccessBinding;

  @Metadata()
  statusCode: number;
}
