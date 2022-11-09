import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetDestinyAggregateActivityStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetDestinyAggregateActivityStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetDestinyAggregateActivityStatsPathParams;
}


export class Destiny2GetDestinyAggregateActivityStatsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
