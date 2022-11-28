import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchUfoSightingsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.city" })
  searchDbUfoSightingsCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.comments" })
  searchDbUfoSightingsComments?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.country" })
  searchDbUfoSightingsCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.date_posted" })
  searchDbUfoSightingsDatePosted?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.datetime" })
  searchDbUfoSightingsDatetime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.duration_hours_min" })
  searchDbUfoSightingsDurationHoursMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.duration_seconds" })
  searchDbUfoSightingsDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.latitude" })
  searchDbUfoSightingsLatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.longitude" })
  searchDbUfoSightingsLongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.shape" })
  searchDbUfoSightingsShape?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.state" })
  searchDbUfoSightingsState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchUfoSightingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchUfoSightingsQueryParams;
}


export class SearchUfoSightingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
