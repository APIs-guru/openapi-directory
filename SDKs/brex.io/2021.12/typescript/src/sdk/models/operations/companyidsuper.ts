import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompanyIdSuperPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum CompanyIdSuperLangEnum {
    Unknown = ""
,    Og = "OG"
,    En = "EN"
}


export class CompanyIdSuperQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: CompanyIdSuperLangEnum;
}


export class CompanyIdSuperSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyIdSuperRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyIdSuperPathParams;

  @Metadata()
  queryParams: CompanyIdSuperQueryParams;

  @Metadata()
  security: CompanyIdSuperSecurity;
}


export class CompanyIdSuperResponse extends SpeakeasyBase {
  @Metadata()
  companyIdSuper200ApplicationJsonAnies?: any[];

  @Metadata()
  companyIdSuperDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
