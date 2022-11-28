import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetClanLeaderboardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class Destiny2GetClanLeaderboardsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxtop" })
  maxtop?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statid" })
  statid?: string;
}


export class Destiny2GetClanLeaderboardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetClanLeaderboardsPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetClanLeaderboardsQueryParams;
}


export class Destiny2GetClanLeaderboardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
