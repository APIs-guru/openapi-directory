import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetArrivalsAndDeparturesByCrsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetArrivalsAndDeparturesByCrsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterStation" })
  filterStation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterType" })
  filterType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numServices" })
  numServices?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" })
  serviceDetails?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeOffset" })
  timeOffset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeWindow" })
  timeWindow?: number;
}


export class GetArrivalsAndDeparturesByCrsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArrivalsAndDeparturesByCrsPathParams;

  @Metadata()
  queryParams: GetArrivalsAndDeparturesByCrsQueryParams;
}


export class GetArrivalsAndDeparturesByCrsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
