import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatisticsItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class GetStatisticsItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetStatisticsItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatisticsItemPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStatisticsItemQueryParams;
}


export class GetStatisticsItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  zoneStats?: shared.ZoneStats;
}
