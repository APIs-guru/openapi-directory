import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypePointNoaaFlaskEventQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.lab_id_number" })
  searchTypePointNoaaFlaskEventLabIdNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.measurement_group" })
  searchTypePointNoaaFlaskEventMeasurementGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.parameter" })
  searchTypePointNoaaFlaskEventParameter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.project" })
  searchTypePointNoaaFlaskEventProject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.site_id" })
  searchTypePointNoaaFlaskEventSiteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointNoaaFlaskEventRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypePointNoaaFlaskEventQueryParams;
}


export class SearchTypePointNoaaFlaskEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
