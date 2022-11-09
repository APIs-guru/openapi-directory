import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum {
    Main = "main"
,    Patch = "patch"
}


export class AndroidpublisherEditsExpansionfilesPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" })
  apkVersionCode: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=editId" })
  editId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=expansionFileType" })
  expansionFileType: AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;
}


export class AndroidpublisherEditsExpansionfilesPatchQueryParams extends SpeakeasyBase {
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


export class AndroidpublisherEditsExpansionfilesPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherEditsExpansionfilesPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroidpublisherEditsExpansionfilesPatchPathParams;

  @Metadata()
  queryParams: AndroidpublisherEditsExpansionfilesPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ExpansionFile;

  @Metadata()
  security: AndroidpublisherEditsExpansionfilesPatchSecurity;
}


export class AndroidpublisherEditsExpansionfilesPatchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
