import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchEarthSatelliteLandsatQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.archive_version_number" })
  searchEarthSatelliteLandsatArchiveVersionNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.ground_station" })
  searchEarthSatelliteLandsatGroundStation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.satellite" })
  searchEarthSatelliteLandsatSatellite?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.sensor" })
  searchEarthSatelliteLandsatSensor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.wrs_path_number" })
  searchEarthSatelliteLandsatWrsPathNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.wrs_row_number" })
  searchEarthSatelliteLandsatWrsRowNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchEarthSatelliteLandsatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchEarthSatelliteLandsatQueryParams;
}


export class SearchEarthSatelliteLandsatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
