import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypePointPboPositionTimeSeriesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.format_version" })
  searchTypePointPboPositionTimeSeriesFormatVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.four_char_id" })
  searchTypePointPboPositionTimeSeriesFourCharId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.processing_center" })
  searchTypePointPboPositionTimeSeriesProcessingCenter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.reference_frame" })
  searchTypePointPboPositionTimeSeriesReferenceFrame?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.station_name" })
  searchTypePointPboPositionTimeSeriesStationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointPboPositionTimeSeriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypePointPboPositionTimeSeriesQueryParams;
}


export class SearchTypePointPboPositionTimeSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
