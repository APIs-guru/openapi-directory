import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchUfoSightingsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.city" })
  searchDbUfoSightingsCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.comments" })
  searchDbUfoSightingsComments?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.country" })
  searchDbUfoSightingsCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.date_posted" })
  searchDbUfoSightingsDatePosted?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.datetime" })
  searchDbUfoSightingsDatetime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.duration_hours_min" })
  searchDbUfoSightingsDurationHoursMin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.duration_seconds" })
  searchDbUfoSightingsDurationSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.latitude" })
  searchDbUfoSightingsLatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.longitude" })
  searchDbUfoSightingsLongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.shape" })
  searchDbUfoSightingsShape?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.state" })
  searchDbUfoSightingsState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchUfoSightingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchUfoSightingsQueryParams;
}


export class SearchUfoSightingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
