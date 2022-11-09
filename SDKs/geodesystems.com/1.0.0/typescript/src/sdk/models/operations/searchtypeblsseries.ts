import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypeBlsSeriesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.area" })
  searchTypeBlsSeriesArea?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.industry" })
  searchTypeBlsSeriesIndustry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.item" })
  searchTypeBlsSeriesItem?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.measure_data_type" })
  searchTypeBlsSeriesMeasureDataType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.seasonality" })
  searchTypeBlsSeriesSeasonality?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.sector" })
  searchTypeBlsSeriesSector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.survey_name" })
  searchTypeBlsSeriesSurveyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeBlsSeriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypeBlsSeriesQueryParams;
}


export class SearchTypeBlsSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
