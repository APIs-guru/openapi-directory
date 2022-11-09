import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchDbCoIndicatorsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.description" })
  searchDbDbCoIndicatorsDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.domain" })
  searchDbDbCoIndicatorsDomain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.geo_name" })
  searchDbDbCoIndicatorsGeoName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.indicatorName" })
  searchDbDbCoIndicatorsIndicatorName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.location" })
  searchDbDbCoIndicatorsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.measure" })
  searchDbDbCoIndicatorsMeasure?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_db_co_indicators.subdomain" })
  searchDbDbCoIndicatorsSubdomain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchDbCoIndicatorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchDbCoIndicatorsQueryParams;
}


export class SearchDbCoIndicatorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
