import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesListImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesListPathParams extends SpeakeasyBase {
    editId: string;
    imageType: AndroidpublisherEditsImagesListImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesListQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsImagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsImagesListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsImagesListPathParams;
    queryParams: AndroidpublisherEditsImagesListQueryParams;
    security: AndroidpublisherEditsImagesListSecurity;
}
export declare class AndroidpublisherEditsImagesListResponse extends SpeakeasyBase {
    contentType: string;
    imagesListResponse?: shared.ImagesListResponse;
    statusCode: number;
}
