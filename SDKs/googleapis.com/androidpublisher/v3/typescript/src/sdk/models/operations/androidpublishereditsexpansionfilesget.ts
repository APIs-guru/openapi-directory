import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum {
    ExpansionFileTypeUnspecified = "expansionFileTypeUnspecified",
    Main = "main",
    Patch = "patch"
}


export class AndroidpublisherEditsExpansionfilesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" })
  apkVersionCode: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" })
  editId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=expansionFileType" })
  expansionFileType: AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;
}


export class AndroidpublisherEditsExpansionfilesGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AndroidpublisherEditsExpansionfilesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherEditsExpansionfilesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AndroidpublisherEditsExpansionfilesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: AndroidpublisherEditsExpansionfilesGetQueryParams;

  @SpeakeasyMetadata()
  security: AndroidpublisherEditsExpansionfilesGetSecurity;
}


export class AndroidpublisherEditsExpansionfilesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  expansionFile?: shared.ExpansionFile;

  @SpeakeasyMetadata()
  statusCode: number;
}
