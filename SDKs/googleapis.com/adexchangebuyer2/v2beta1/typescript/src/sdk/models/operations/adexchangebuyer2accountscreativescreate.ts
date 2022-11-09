import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Adexchangebuyer2AccountsCreativesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum {
    NoDuplicates = "NO_DUPLICATES"
,    ForceEnableDuplicateIds = "FORCE_ENABLE_DUPLICATE_IDS"
}


export class Adexchangebuyer2AccountsCreativesCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duplicateIdMode" })
  duplicateIdMode?: Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class Adexchangebuyer2AccountsCreativesCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Adexchangebuyer2AccountsCreativesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Adexchangebuyer2AccountsCreativesCreatePathParams;

  @Metadata()
  queryParams: Adexchangebuyer2AccountsCreativesCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Creative;

  @Metadata()
  security: Adexchangebuyer2AccountsCreativesCreateSecurity;
}


export class Adexchangebuyer2AccountsCreativesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creative?: shared.Creative;

  @Metadata()
  statusCode: number;
}
