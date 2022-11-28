import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesDeleteallImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesDeleteallPathParams extends SpeakeasyBase {
    editId: string;
    imageType: AndroidpublisherEditsImagesDeleteallImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesDeleteallQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsImagesDeleteallSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsImagesDeleteallRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsImagesDeleteallPathParams;
    queryParams: AndroidpublisherEditsImagesDeleteallQueryParams;
    security: AndroidpublisherEditsImagesDeleteallSecurity;
}
export declare class AndroidpublisherEditsImagesDeleteallResponse extends SpeakeasyBase {
    contentType: string;
    imagesDeleteAllResponse?: shared.ImagesDeleteAllResponse;
    statusCode: number;
}
