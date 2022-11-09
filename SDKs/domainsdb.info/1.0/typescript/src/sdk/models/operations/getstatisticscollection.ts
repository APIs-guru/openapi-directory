import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatisticsCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetStatisticsCollectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStatisticsCollectionQueryParams;
}


export class GetStatisticsCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ZoneStats })
  zoneStats?: shared.ZoneStats[];
}
