import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypePointGeomagIaga2002QueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.data_interval" })
  searchTypePointGeomagIaga2002DataInterval?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.data_type" })
  searchTypePointGeomagIaga2002DataType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.digital_sampling" })
  searchTypePointGeomagIaga2002DigitalSampling?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.iaga_code" })
  searchTypePointGeomagIaga2002IagaCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.source_of_data" })
  searchTypePointGeomagIaga2002SourceOfData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.station_name" })
  searchTypePointGeomagIaga2002StationName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointGeomagIaga2002Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypePointGeomagIaga2002QueryParams;
}


export class SearchTypePointGeomagIaga2002Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
