import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatisticsItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class GetStatisticsItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetStatisticsItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatisticsItemPathParams;

  @Metadata()
  queryParams: GetStatisticsItemQueryParams;
}


export class GetStatisticsItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  zoneStats?: shared.ZoneStats;
}
