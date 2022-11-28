import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesUploadImageTypeEnum {
    AppImageTypeUnspecified = "appImageTypeUnspecified",
    PhoneScreenshots = "phoneScreenshots",
    SevenInchScreenshots = "sevenInchScreenshots",
    TenInchScreenshots = "tenInchScreenshots",
    TvScreenshots = "tvScreenshots",
    WearScreenshots = "wearScreenshots",
    Icon = "icon",
    FeatureGraphic = "featureGraphic",
    TvBanner = "tvBanner"
}
export declare class AndroidpublisherEditsImagesUploadPathParams extends SpeakeasyBase {
    editId: string;
    imageType: AndroidpublisherEditsImagesUploadImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesUploadQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherEditsImagesUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsImagesUploadRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsImagesUploadPathParams;
    queryParams: AndroidpublisherEditsImagesUploadQueryParams;
    security: AndroidpublisherEditsImagesUploadSecurity;
}
export declare class AndroidpublisherEditsImagesUploadResponse extends SpeakeasyBase {
    contentType: string;
    imagesUploadResponse?: shared.ImagesUploadResponse;
    statusCode: number;
}
