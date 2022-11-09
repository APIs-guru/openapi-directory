import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBostonCrimeQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.day_of_week" })
  searchDbBostonCrimeDayOfWeek?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.district" })
  searchDbBostonCrimeDistrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.hour" })
  searchDbBostonCrimeHour?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.location" })
  searchDbBostonCrimeLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.month" })
  searchDbBostonCrimeMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense" })
  searchDbBostonCrimeOffense?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense_code_group" })
  searchDbBostonCrimeOffenseCodeGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense_description" })
  searchDbBostonCrimeOffenseDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.reporting_area" })
  searchDbBostonCrimeReportingArea?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.shooting" })
  searchDbBostonCrimeShooting?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.street" })
  searchDbBostonCrimeStreet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.year" })
  searchDbBostonCrimeYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBostonCrimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBostonCrimeQueryParams;
}


export class SearchBostonCrimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
