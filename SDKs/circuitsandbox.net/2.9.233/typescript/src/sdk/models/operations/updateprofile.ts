import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateProfileRequestBodyLocaleEnum {
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


export class UpdateProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=firstname;" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "form, name=jobTitle;" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "form, name=lastname;" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "form, name=locale;" })
  locale?: UpdateProfileRequestBodyLocaleEnum;
}


export class UpdateProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateProfileRequestBody;

  @SpeakeasyMetadata()
  security: UpdateProfileSecurity;
}


export class UpdateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: any;
}
