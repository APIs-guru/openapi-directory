import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdsensehostAssociationsessionsStartProductCodeEnum {
    Afc = "AFC",
    Afg = "AFG",
    Afmc = "AFMC",
    Afs = "AFS",
    Afv = "AFV"
}


export class AdsensehostAssociationsessionsStartQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productCode" })
  productCode: AdsensehostAssociationsessionsStartProductCodeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userLocale" })
  userLocale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=websiteLocale" })
  websiteLocale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=websiteUrl" })
  websiteUrl: string;
}


export class AdsensehostAssociationsessionsStartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsensehostAssociationsessionsStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AdsensehostAssociationsessionsStartQueryParams;

  @SpeakeasyMetadata()
  security: AdsensehostAssociationsessionsStartSecurity;
}


export class AdsensehostAssociationsessionsStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationSession?: shared.AssociationSession;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
