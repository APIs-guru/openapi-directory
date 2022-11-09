import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateProfileRequestBodyLocaleEnum {
    EnUs = "EN_US"
,    DeDe = "DE_DE"
,    EnGb = "EN_GB"
,    EsEs = "ES_ES"
,    FrFr = "FR_FR"
,    ItIt = "IT_IT"
,    RuRu = "RU_RU"
,    ZhHansCn = "ZH_HANS_CN"
,    PtBr = "PT_BR"
,    NlNl = "NL_NL"
,    CaEs = "CA_ES"
}


export class UpdateProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=firstname;" })
  firstname?: string;

  @Metadata({ data: "form, name=jobTitle;" })
  jobTitle?: string;

  @Metadata({ data: "form, name=lastname;" })
  lastname?: string;

  @Metadata({ data: "form, name=locale;" })
  locale?: UpdateProfileRequestBodyLocaleEnum;
}


export class UpdateProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateProfileRequestBody;

  @Metadata()
  security: UpdateProfileSecurity;
}


export class UpdateProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: any;
}
