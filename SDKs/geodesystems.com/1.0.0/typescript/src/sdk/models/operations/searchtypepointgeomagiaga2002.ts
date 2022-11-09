import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypePointGeomagIaga2002QueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.data_interval" })
  searchTypePointGeomagIaga2002DataInterval?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.data_type" })
  searchTypePointGeomagIaga2002DataType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.digital_sampling" })
  searchTypePointGeomagIaga2002DigitalSampling?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.iaga_code" })
  searchTypePointGeomagIaga2002IagaCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.source_of_data" })
  searchTypePointGeomagIaga2002SourceOfData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.station_name" })
  searchTypePointGeomagIaga2002StationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypePointGeomagIaga2002Request extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypePointGeomagIaga2002QueryParams;
}


export class SearchTypePointGeomagIaga2002Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
