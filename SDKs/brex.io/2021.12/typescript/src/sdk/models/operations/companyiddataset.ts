import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CompanyIdDatasetDatasetEnum {
    Unknown = "",
    Mini = "mini",
    Master = "master",
    Full = "full",
    Refresh = "refresh"
}


export class CompanyIdDatasetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataset" })
  dataset: CompanyIdDatasetDatasetEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum CompanyIdDatasetLangEnum {
    Unknown = "",
    En = "EN",
    Es = "ES",
    Fr = "FR"
}


export class CompanyIdDatasetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=check_stock_listing" })
  checkStockListing?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: CompanyIdDatasetLangEnum;
}


export class CompanyIdDatasetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class CompanyIdDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyIdDatasetPathParams;

  @SpeakeasyMetadata()
  queryParams: CompanyIdDatasetQueryParams;

  @SpeakeasyMetadata()
  security: CompanyIdDatasetSecurity;
}


export class CompanyIdDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyIdDatasetDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany?: any;
}
