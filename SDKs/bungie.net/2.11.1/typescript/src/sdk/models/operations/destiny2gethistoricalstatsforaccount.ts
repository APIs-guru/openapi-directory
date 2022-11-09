import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetHistoricalStatsForAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetHistoricalStatsForAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=groups" })
  groups?: number[];
}


export class Destiny2GetHistoricalStatsForAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetHistoricalStatsForAccountPathParams;

  @Metadata()
  queryParams: Destiny2GetHistoricalStatsForAccountQueryParams;
}


export class Destiny2GetHistoricalStatsForAccountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
