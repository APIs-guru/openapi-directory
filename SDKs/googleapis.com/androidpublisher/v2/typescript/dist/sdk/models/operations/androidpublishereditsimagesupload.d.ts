import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesUploadImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesUploadPathParams extends SpeakeasyBase {
    editId: string;
    imageType: AndroidpublisherEditsImagesUploadImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesUploadQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
