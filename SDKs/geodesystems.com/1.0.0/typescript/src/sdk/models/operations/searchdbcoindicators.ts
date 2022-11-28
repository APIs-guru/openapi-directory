import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchDbCoIndicatorsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.description" })
  searchDbDbCoIndicatorsDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.domain" })
  searchDbDbCoIndicatorsDomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.geo_name" })
  searchDbDbCoIndicatorsGeoName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.indicatorName" })
  searchDbDbCoIndicatorsIndicatorName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.location" })
  searchDbDbCoIndicatorsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.measure" })
  searchDbDbCoIndicatorsMeasure?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.subdomain" })
  searchDbDbCoIndicatorsSubdomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchDbCoIndicatorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchDbCoIndicatorsQueryParams;
}


export class SearchDbCoIndicatorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
