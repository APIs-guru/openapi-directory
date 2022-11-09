import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetClanAggregateStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class Destiny2GetClanAggregateStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;
}


export class Destiny2GetClanAggregateStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetClanAggregateStatsPathParams;

  @Metadata()
  queryParams: Destiny2GetClanAggregateStatsQueryParams;
}


export class Destiny2GetClanAggregateStatsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
