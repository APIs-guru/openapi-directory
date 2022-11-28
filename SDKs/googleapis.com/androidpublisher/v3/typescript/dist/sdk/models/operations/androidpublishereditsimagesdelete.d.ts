import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesDeleteImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesDeletePathParams extends SpeakeasyBase {
    editId: string;
    imageId: string;
    imageType: AndroidpublisherEditsImagesDeleteImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherEditsImagesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherEditsImagesDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherEditsImagesDeletePathParams;
    queryParams: AndroidpublisherEditsImagesDeleteQueryParams;
    security: AndroidpublisherEditsImagesDeleteSecurity;
}
export declare class AndroidpublisherEditsImagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
