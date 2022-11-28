import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypePointPboPositionTimeSeriesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.format_version" })
  searchTypePointPboPositionTimeSeriesFormatVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.four_char_id" })
  searchTypePointPboPositionTimeSeriesFourCharId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.processing_center" })
  searchTypePointPboPositionTimeSeriesProcessingCenter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.reference_frame" })
  searchTypePointPboPositionTimeSeriesReferenceFrame?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.station_name" })
  searchTypePointPboPositionTimeSeriesStationName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointPboPositionTimeSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypePointPboPositionTimeSeriesQueryParams;
}


export class SearchTypePointPboPositionTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
