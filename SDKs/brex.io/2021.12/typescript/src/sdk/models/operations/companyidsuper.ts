import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompanyIdSuperPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum CompanyIdSuperLangEnum {
    Unknown = "",
    Og = "OG",
    En = "EN"
}


export class CompanyIdSuperQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: CompanyIdSuperLangEnum;
}


export class CompanyIdSuperSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyIdSuperRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyIdSuperPathParams;

  @SpeakeasyMetadata()
  queryParams: CompanyIdSuperQueryParams;

  @SpeakeasyMetadata()
  security: CompanyIdSuperSecurity;
}


export class CompanyIdSuperResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyIdSuper200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  companyIdSuperDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
