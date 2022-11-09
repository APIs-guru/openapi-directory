import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdsensehostAssociationsessionsStartProductCodeEnum {
    Afc = "AFC"
,    Afg = "AFG"
,    Afmc = "AFMC"
,    Afs = "AFS"
,    Afv = "AFV"
}


export class AdsensehostAssociationsessionsStartQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callbackUrl" })
  callbackUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=productCode" })
  productCode: AdsensehostAssociationsessionsStartProductCodeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userLocale" })
  userLocale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=websiteLocale" })
  websiteLocale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=websiteUrl" })
  websiteUrl: string;
}


export class AdsensehostAssociationsessionsStartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsensehostAssociationsessionsStartRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AdsensehostAssociationsessionsStartQueryParams;

  @Metadata()
  security: AdsensehostAssociationsessionsStartSecurity;
}


export class AdsensehostAssociationsessionsStartResponse extends SpeakeasyBase {
  @Metadata()
  associationSession?: shared.AssociationSession;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
