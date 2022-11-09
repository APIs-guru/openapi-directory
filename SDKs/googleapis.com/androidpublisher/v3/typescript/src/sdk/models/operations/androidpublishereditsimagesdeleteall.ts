import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AndroidpublisherEditsImagesDeleteallImageTypeEnum {
    AppImageTypeUnspecified = "appImageTypeUnspecified"
,    PhoneScreenshots = "phoneScreenshots"
,    SevenInchScreenshots = "sevenInchScreenshots"
,    TenInchScreenshots = "tenInchScreenshots"
,    TvScreenshots = "tvScreenshots"
,    WearScreenshots = "wearScreenshots"
,    Icon = "icon"
,    FeatureGraphic = "featureGraphic"
,    TvBanner = "tvBanner"
}


export class AndroidpublisherEditsImagesDeleteallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=editId" })
  editId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: AndroidpublisherEditsImagesDeleteallImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;
}


export class AndroidpublisherEditsImagesDeleteallQueryParams extends SpeakeasyBase {
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


export class AndroidpublisherEditsImagesDeleteallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherEditsImagesDeleteallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroidpublisherEditsImagesDeleteallPathParams;

  @Metadata()
  queryParams: AndroidpublisherEditsImagesDeleteallQueryParams;

  @Metadata()
  security: AndroidpublisherEditsImagesDeleteallSecurity;
}


export class AndroidpublisherEditsImagesDeleteallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imagesDeleteAllResponse?: shared.ImagesDeleteAllResponse;

  @Metadata()
  statusCode: number;
}
