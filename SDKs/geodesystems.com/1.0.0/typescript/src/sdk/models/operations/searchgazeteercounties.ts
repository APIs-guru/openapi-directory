import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchGazeteerCountiesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.area_land" })
  searchDbGazeteerCountiesAreaLand?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.area_water" })
  searchDbGazeteerCountiesAreaWater?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.county_fips" })
  searchDbGazeteerCountiesCountyFips?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.county_name" })
  searchDbGazeteerCountiesCountyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.full_county_fips" })
  searchDbGazeteerCountiesFullCountyFips?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.location" })
  searchDbGazeteerCountiesLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.state_abbreviation" })
  searchDbGazeteerCountiesStateAbbreviation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.state_fips" })
  searchDbGazeteerCountiesStateFips?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchGazeteerCountiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchGazeteerCountiesQueryParams;
}


export class SearchGazeteerCountiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
