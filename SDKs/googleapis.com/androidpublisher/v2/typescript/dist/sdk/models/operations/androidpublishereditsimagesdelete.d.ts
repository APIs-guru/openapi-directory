import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesDeleteImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesDeletePathParams extends SpeakeasyBase {
    editId: string;
    imageId: string;
    imageType: AndroidpublisherEditsImagesDeleteImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
