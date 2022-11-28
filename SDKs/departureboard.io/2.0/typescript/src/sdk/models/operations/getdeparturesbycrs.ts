import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeparturesByCrsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetDeparturesByCrsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterStation" })
  filterStation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numServices" })
  numServices?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" })
  serviceDetails?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOffset" })
  timeOffset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeWindow" })
  timeWindow?: number;
}


export class GetDeparturesByCrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeparturesByCrsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeparturesByCrsQueryParams;
}


export class GetDeparturesByCrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
