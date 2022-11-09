import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchGeoGpxQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.distance" })
  searchGeoGpxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.elevation_gain" })
  searchGeoGpxElevationGain?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.elevation_loss" })
  searchGeoGpxElevationLoss?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.moving_time" })
  searchGeoGpxMovingTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.speed" })
  searchGeoGpxSpeed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.total_time" })
  searchGeoGpxTotalTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchGeoGpxRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchGeoGpxQueryParams;
}


export class SearchGeoGpxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
