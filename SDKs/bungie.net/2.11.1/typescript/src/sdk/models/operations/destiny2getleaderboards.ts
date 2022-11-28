import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetLeaderboardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetLeaderboardsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxtop" })
  maxtop?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statid" })
  statid?: string;
}


export class Destiny2GetLeaderboardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetLeaderboardsPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetLeaderboardsQueryParams;
}


export class Destiny2GetLeaderboardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
