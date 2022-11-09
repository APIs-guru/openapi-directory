import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CompanyIdDatasetDatasetEnum {
    Unknown = ""
,    Mini = "mini"
,    Master = "master"
,    Full = "full"
,    Refresh = "refresh"
}


export class CompanyIdDatasetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dataset" })
  dataset: CompanyIdDatasetDatasetEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum CompanyIdDatasetLangEnum {
    Unknown = ""
,    En = "EN"
,    Es = "ES"
,    Fr = "FR"
}


export class CompanyIdDatasetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=check_stock_listing" })
  checkStockListing?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: CompanyIdDatasetLangEnum;
}


export class CompanyIdDatasetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyIdDatasetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyIdDatasetPathParams;

  @Metadata()
  queryParams: CompanyIdDatasetQueryParams;

  @Metadata()
  security: CompanyIdDatasetSecurity;
}


export class CompanyIdDatasetResponse extends SpeakeasyBase {
  @Metadata()
  companyIdDatasetDefaultApplicationJsonAny?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany?: any;
}
