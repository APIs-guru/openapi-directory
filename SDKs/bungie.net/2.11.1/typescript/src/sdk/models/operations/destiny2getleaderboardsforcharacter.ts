import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetLeaderboardsForCharacterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetLeaderboardsForCharacterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxtop" })
  maxtop?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statid" })
  statid?: string;
}


export class Destiny2GetLeaderboardsForCharacterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetLeaderboardsForCharacterPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetLeaderboardsForCharacterQueryParams;
}


export class Destiny2GetLeaderboardsForCharacterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
