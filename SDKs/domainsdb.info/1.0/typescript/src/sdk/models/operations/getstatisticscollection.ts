import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatisticsCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetStatisticsCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStatisticsCollectionQueryParams;
}


export class GetStatisticsCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ZoneStats })
  zoneStats?: shared.ZoneStats[];
}
