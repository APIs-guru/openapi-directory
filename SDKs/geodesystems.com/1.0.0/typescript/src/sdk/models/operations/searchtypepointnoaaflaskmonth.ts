import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypePointNoaaFlaskMonthQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.lab_id_number" })
  searchTypePointNoaaFlaskMonthLabIdNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.measurement_group" })
  searchTypePointNoaaFlaskMonthMeasurementGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.parameter" })
  searchTypePointNoaaFlaskMonthParameter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.project" })
  searchTypePointNoaaFlaskMonthProject?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.site_id" })
  searchTypePointNoaaFlaskMonthSiteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointNoaaFlaskMonthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypePointNoaaFlaskMonthQueryParams;
}


export class SearchTypePointNoaaFlaskMonthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
