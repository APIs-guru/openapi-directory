import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypePointNoaaFlaskEventQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.lab_id_number" })
  searchTypePointNoaaFlaskEventLabIdNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.measurement_group" })
  searchTypePointNoaaFlaskEventMeasurementGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.parameter" })
  searchTypePointNoaaFlaskEventParameter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.project" })
  searchTypePointNoaaFlaskEventProject?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_event.site_id" })
  searchTypePointNoaaFlaskEventSiteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointNoaaFlaskEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypePointNoaaFlaskEventQueryParams;
}


export class SearchTypePointNoaaFlaskEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
