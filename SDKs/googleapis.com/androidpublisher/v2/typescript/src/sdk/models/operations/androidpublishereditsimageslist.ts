import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AndroidpublisherEditsImagesListImageTypeEnum {
    FeatureGraphic = "featureGraphic",
    Icon = "icon",
    PhoneScreenshots = "phoneScreenshots",
    PromoGraphic = "promoGraphic",
    SevenInchScreenshots = "sevenInchScreenshots",
    TenInchScreenshots = "tenInchScreenshots",
    TvBanner = "tvBanner",
    TvScreenshots = "tvScreenshots",
    WearScreenshots = "wearScreenshots"
}


export class AndroidpublisherEditsImagesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" })
  editId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: AndroidpublisherEditsImagesListImageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;
}


export class AndroidpublisherEditsImagesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AndroidpublisherEditsImagesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherEditsImagesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AndroidpublisherEditsImagesListPathParams;

  @SpeakeasyMetadata()
  queryParams: AndroidpublisherEditsImagesListQueryParams;

  @SpeakeasyMetadata()
  security: AndroidpublisherEditsImagesListSecurity;
}


export class AndroidpublisherEditsImagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
