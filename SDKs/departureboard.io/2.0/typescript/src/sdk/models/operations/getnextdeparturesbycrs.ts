import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNextDeparturesByCrsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetNextDeparturesByCrsQueryParams extends SpeakeasyBase {
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


export class GetNextDeparturesByCrsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNextDeparturesByCrsPathParams;

  @Metadata()
  queryParams: GetNextDeparturesByCrsQueryParams;
}


export class GetNextDeparturesByCrsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
