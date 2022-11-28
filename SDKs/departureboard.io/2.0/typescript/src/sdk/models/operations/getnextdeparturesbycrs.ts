import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNextDeparturesByCrsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetNextDeparturesByCrsQueryParams extends SpeakeasyBase {
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


export class GetNextDeparturesByCrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNextDeparturesByCrsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNextDeparturesByCrsQueryParams;
}


export class GetNextDeparturesByCrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
