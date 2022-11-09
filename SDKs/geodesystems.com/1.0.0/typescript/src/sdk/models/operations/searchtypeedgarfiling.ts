import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypeEdgarFilingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.cik_number" })
  searchTypeEdgarFilingCikNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.company_name" })
  searchTypeEdgarFilingCompanyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.form_type" })
  searchTypeEdgarFilingFormType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.irs_number" })
  searchTypeEdgarFilingIrsNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.standard_industrial_classification" })
  searchTypeEdgarFilingStandardIndustrialClassification?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_edgar_filing.state" })
  searchTypeEdgarFilingState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeEdgarFilingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypeEdgarFilingQueryParams;
}


export class SearchTypeEdgarFilingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
