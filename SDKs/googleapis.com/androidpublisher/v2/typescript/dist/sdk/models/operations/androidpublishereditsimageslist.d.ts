import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesListImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesListPathParams extends SpeakeasyBase {
    editId: string;
    imageType: AndroidpublisherEditsImagesListImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
