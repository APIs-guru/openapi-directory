import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetClanAggregateStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class Destiny2GetClanAggregateStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;
}


export class Destiny2GetClanAggregateStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetClanAggregateStatsPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetClanAggregateStatsQueryParams;
}


export class Destiny2GetClanAggregateStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
