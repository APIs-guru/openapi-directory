import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchGazeteerCensusTractsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.census_tract_id" })
  searchDbGazeteerCensusTractsCensusTractId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.county_fips" })
  searchDbGazeteerCensusTractsCountyFips?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.county_name" })
  searchDbGazeteerCensusTractsCountyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.full_census_tract_id" })
  searchDbGazeteerCensusTractsFullCensusTractId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.land_area" })
  searchDbGazeteerCensusTractsLandArea?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.location" })
  searchDbGazeteerCensusTractsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.state" })
  searchDbGazeteerCensusTractsState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.state_fips" })
  searchDbGazeteerCensusTractsStateFips?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_census_tracts.water_area" })
  searchDbGazeteerCensusTractsWaterArea?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchGazeteerCensusTractsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchGazeteerCensusTractsQueryParams;
}


export class SearchGazeteerCensusTractsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
