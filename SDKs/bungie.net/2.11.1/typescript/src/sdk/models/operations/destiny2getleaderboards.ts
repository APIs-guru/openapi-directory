import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetLeaderboardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetLeaderboardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxtop" })
  maxtop?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=statid" })
  statid?: string;
}


export class Destiny2GetLeaderboardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetLeaderboardsPathParams;

  @Metadata()
  queryParams: Destiny2GetLeaderboardsQueryParams;
}


export class Destiny2GetLeaderboardsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
