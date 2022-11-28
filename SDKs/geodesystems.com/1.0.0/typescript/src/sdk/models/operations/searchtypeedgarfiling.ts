import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypeEdgarFilingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.cik_number" })
  searchTypeEdgarFilingCikNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.company_name" })
  searchTypeEdgarFilingCompanyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.form_type" })
  searchTypeEdgarFilingFormType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.irs_number" })
  searchTypeEdgarFilingIrsNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.standard_industrial_classification" })
  searchTypeEdgarFilingStandardIndustrialClassification?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.state" })
  searchTypeEdgarFilingState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeEdgarFilingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypeEdgarFilingQueryParams;
}


export class SearchTypeEdgarFilingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
