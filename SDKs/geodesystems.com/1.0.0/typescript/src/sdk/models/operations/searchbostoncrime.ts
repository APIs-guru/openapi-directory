import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBostonCrimeQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.day_of_week" })
  searchDbBostonCrimeDayOfWeek?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.district" })
  searchDbBostonCrimeDistrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.hour" })
  searchDbBostonCrimeHour?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.location" })
  searchDbBostonCrimeLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.month" })
  searchDbBostonCrimeMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense" })
  searchDbBostonCrimeOffense?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense_code_group" })
  searchDbBostonCrimeOffenseCodeGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense_description" })
  searchDbBostonCrimeOffenseDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.reporting_area" })
  searchDbBostonCrimeReportingArea?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.shooting" })
  searchDbBostonCrimeShooting?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.street" })
  searchDbBostonCrimeStreet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.year" })
  searchDbBostonCrimeYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBostonCrimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBostonCrimeQueryParams;
}


export class SearchBostonCrimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
