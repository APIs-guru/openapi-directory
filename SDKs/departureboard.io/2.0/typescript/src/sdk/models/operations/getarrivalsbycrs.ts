import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetArrivalsByCrsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CRS" })
  crs: string;
}


export class GetArrivalsByCrsQueryParams extends SpeakeasyBase {
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


export class GetArrivalsByCrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArrivalsByCrsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetArrivalsByCrsQueryParams;
}


export class GetArrivalsByCrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
