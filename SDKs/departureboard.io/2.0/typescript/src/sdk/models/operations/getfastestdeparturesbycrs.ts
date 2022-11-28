import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFastestDeparturesByCrsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetFastestDeparturesByCrsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterList" })
  filterList: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceDetails" })
  serviceDetails?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOffset" })
  timeOffset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeWindow" })
  timeWindow?: number;
}


export class GetFastestDeparturesByCrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFastestDeparturesByCrsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFastestDeparturesByCrsQueryParams;
}


export class GetFastestDeparturesByCrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
