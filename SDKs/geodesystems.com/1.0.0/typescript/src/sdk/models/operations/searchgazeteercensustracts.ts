import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchGazeteerCensusTractsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.census_tract_id" })
  searchDbGazeteerCensusTractsCensusTractId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.county_fips" })
  searchDbGazeteerCensusTractsCountyFips?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.county_name" })
  searchDbGazeteerCensusTractsCountyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.full_census_tract_id" })
  searchDbGazeteerCensusTractsFullCensusTractId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.land_area" })
  searchDbGazeteerCensusTractsLandArea?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.location" })
  searchDbGazeteerCensusTractsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.state" })
  searchDbGazeteerCensusTractsState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.state_fips" })
  searchDbGazeteerCensusTractsStateFips?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.water_area" })
  searchDbGazeteerCensusTractsWaterArea?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchGazeteerCensusTractsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchGazeteerCensusTractsQueryParams;
}


export class SearchGazeteerCensusTractsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
