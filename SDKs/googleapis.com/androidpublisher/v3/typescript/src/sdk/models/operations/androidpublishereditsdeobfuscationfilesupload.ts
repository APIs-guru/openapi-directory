import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified"
,    Proguard = "proguard"
,    NativeCode = "nativeCode"
}


export class AndroidpublisherEditsDeobfuscationfilesUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" })
  apkVersionCode: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=deobfuscationFileType" })
  deobfuscationFileType: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=editId" })
  editId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;
}


export class AndroidpublisherEditsDeobfuscationfilesUploadQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AndroidpublisherEditsDeobfuscationfilesUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherEditsDeobfuscationfilesUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroidpublisherEditsDeobfuscationfilesUploadPathParams;

  @Metadata()
  queryParams: AndroidpublisherEditsDeobfuscationfilesUploadQueryParams;

  @Metadata()
  security: AndroidpublisherEditsDeobfuscationfilesUploadSecurity;
}


export class AndroidpublisherEditsDeobfuscationfilesUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deobfuscationFilesUploadResponse?: shared.DeobfuscationFilesUploadResponse;

  @Metadata()
  statusCode: number;
}
