import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchUsPlacesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_us_places.county_name" })
  searchDbUsPlacesCountyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_us_places.elev_in_ft" })
  searchDbUsPlacesElevInFt?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_us_places.feature_class" })
  searchDbUsPlacesFeatureClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_us_places.feature_name" })
  searchDbUsPlacesFeatureName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_us_places.location" })
  searchDbUsPlacesLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_us_places.state_alpha" })
  searchDbUsPlacesStateAlpha?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchUsPlacesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchUsPlacesQueryParams;
}


export class SearchUsPlacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
