import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchGeoGpxQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.distance" })
  searchGeoGpxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.elevation_gain" })
  searchGeoGpxElevationGain?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.elevation_loss" })
  searchGeoGpxElevationLoss?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.moving_time" })
  searchGeoGpxMovingTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.speed" })
  searchGeoGpxSpeed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.geo_gpx.total_time" })
  searchGeoGpxTotalTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchGeoGpxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchGeoGpxQueryParams;
}


export class SearchGeoGpxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
