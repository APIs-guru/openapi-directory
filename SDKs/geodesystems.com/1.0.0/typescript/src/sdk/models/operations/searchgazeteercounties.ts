import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchGazeteerCountiesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.area_land" })
  searchDbGazeteerCountiesAreaLand?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.area_water" })
  searchDbGazeteerCountiesAreaWater?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.county_fips" })
  searchDbGazeteerCountiesCountyFips?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.county_name" })
  searchDbGazeteerCountiesCountyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.full_county_fips" })
  searchDbGazeteerCountiesFullCountyFips?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.location" })
  searchDbGazeteerCountiesLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.state_abbreviation" })
  searchDbGazeteerCountiesStateAbbreviation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.state_fips" })
  searchDbGazeteerCountiesStateFips?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchGazeteerCountiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchGazeteerCountiesQueryParams;
}


export class SearchGazeteerCountiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
