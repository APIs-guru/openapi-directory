import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetLeaderboardsForCharacterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetLeaderboardsForCharacterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxtop" })
  maxtop?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modes" })
  modes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=statid" })
  statid?: string;
}


export class Destiny2GetLeaderboardsForCharacterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetLeaderboardsForCharacterPathParams;

  @Metadata()
  queryParams: Destiny2GetLeaderboardsForCharacterQueryParams;
}


export class Destiny2GetLeaderboardsForCharacterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
