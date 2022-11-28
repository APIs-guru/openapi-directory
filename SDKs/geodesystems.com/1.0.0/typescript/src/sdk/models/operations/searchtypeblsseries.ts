import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypeBlsSeriesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.area" })
  searchTypeBlsSeriesArea?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.industry" })
  searchTypeBlsSeriesIndustry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.item" })
  searchTypeBlsSeriesItem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.measure_data_type" })
  searchTypeBlsSeriesMeasureDataType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.seasonality" })
  searchTypeBlsSeriesSeasonality?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.sector" })
  searchTypeBlsSeriesSector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_bls_series.survey_name" })
  searchTypeBlsSeriesSurveyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeBlsSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypeBlsSeriesQueryParams;
}


export class SearchTypeBlsSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
