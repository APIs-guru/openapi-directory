import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFastestDeparturesByCrsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetFastestDeparturesByCrsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterList" })
  filterList: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" })
  serviceDetails?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeOffset" })
  timeOffset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeWindow" })
  timeWindow?: number;
}


export class GetFastestDeparturesByCrsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFastestDeparturesByCrsPathParams;

  @Metadata()
  queryParams: GetFastestDeparturesByCrsQueryParams;
}


export class GetFastestDeparturesByCrsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
