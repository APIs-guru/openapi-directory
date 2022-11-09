import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeparturesByCrsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetDeparturesByCrsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterStation" })
  filterStation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numServices" })
  numServices?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" })
  serviceDetails?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeOffset" })
  timeOffset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeWindow" })
  timeWindow?: number;
}


export class GetDeparturesByCrsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeparturesByCrsPathParams;

  @Metadata()
  queryParams: GetDeparturesByCrsQueryParams;
}


export class GetDeparturesByCrsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
