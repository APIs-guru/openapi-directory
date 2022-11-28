import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdsensehostAssociationsessionsStartProductCodeEnum {
    Afc = "AFC",
    Afg = "AFG",
    Afmc = "AFMC",
    Afs = "AFS",
    Afv = "AFV"
}
export declare class AdsensehostAssociationsessionsStartQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    callbackUrl?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    productCode: AdsensehostAssociationsessionsStartProductCodeEnum[];
    quotaUser?: string;
    userIp?: string;
    userLocale?: string;
    websiteLocale?: string;
    websiteUrl: string;
}
export declare class AdsensehostAssociationsessionsStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAssociationsessionsStartRequest extends SpeakeasyBase {
    queryParams: AdsensehostAssociationsessionsStartQueryParams;
    security: AdsensehostAssociationsessionsStartSecurity;
}
export declare class AdsensehostAssociationsessionsStartResponse extends SpeakeasyBase {
    associationSession?: shared.AssociationSession;
    contentType: string;
    statusCode: number;
}
