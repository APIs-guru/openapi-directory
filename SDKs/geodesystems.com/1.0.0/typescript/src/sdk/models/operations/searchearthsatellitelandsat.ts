import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchEarthSatelliteLandsatQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.archive_version_number" })
  searchEarthSatelliteLandsatArchiveVersionNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.ground_station" })
  searchEarthSatelliteLandsatGroundStation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.satellite" })
  searchEarthSatelliteLandsatSatellite?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.sensor" })
  searchEarthSatelliteLandsatSensor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.wrs_path_number" })
  searchEarthSatelliteLandsatWrsPathNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.wrs_row_number" })
  searchEarthSatelliteLandsatWrsRowNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchEarthSatelliteLandsatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchEarthSatelliteLandsatQueryParams;
}


export class SearchEarthSatelliteLandsatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
