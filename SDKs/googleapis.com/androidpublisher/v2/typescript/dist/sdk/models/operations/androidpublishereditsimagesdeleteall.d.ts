import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidpublisherEditsImagesDeleteallImageTypeEnum {
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
export declare class AndroidpublisherEditsImagesDeleteallPathParams extends SpeakeasyBase {
    editId: string;
    imageType: AndroidpublisherEditsImagesDeleteallImageTypeEnum;
    language: string;
    packageName: string;
}
export declare class AndroidpublisherEditsImagesDeleteallQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
