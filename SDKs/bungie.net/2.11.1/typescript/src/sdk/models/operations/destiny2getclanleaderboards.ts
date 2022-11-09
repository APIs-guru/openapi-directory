import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetClanLeaderboardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class Destiny2GetClanLeaderboardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxtop" })
  maxtop?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=statid" })
  statid?: string;
}


export class Destiny2GetClanLeaderboardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetClanLeaderboardsPathParams;

  @Metadata()
  queryParams: Destiny2GetClanLeaderboardsQueryParams;
}


export class Destiny2GetClanLeaderboardsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
