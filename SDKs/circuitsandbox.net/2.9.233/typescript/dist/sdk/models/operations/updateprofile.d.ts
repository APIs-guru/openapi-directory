import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProfileRequestBodyLocaleEnum {
    EnUs = "EN_US",
    DeDe = "DE_DE",
    EnGb = "EN_GB",
    EsEs = "ES_ES",
    FrFr = "FR_FR",
    ItIt = "IT_IT",
    RuRu = "RU_RU",
    ZhHansCn = "ZH_HANS_CN",
    PtBr = "PT_BR",
    NlNl = "NL_NL",
    CaEs = "CA_ES"
}
export declare class UpdateProfileRequestBody extends SpeakeasyBase {
    firstname?: string;
    jobTitle?: string;
    lastname?: string;
    locale?: UpdateProfileRequestBodyLocaleEnum;
}
export declare class UpdateProfileSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    request?: UpdateProfileRequestBody;
    security: UpdateProfileSecurity;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    user?: any;
}
