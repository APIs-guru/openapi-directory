import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetHistoricalStatsForAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetHistoricalStatsForAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=groups" })
  groups?: number[];
}


export class Destiny2GetHistoricalStatsForAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetHistoricalStatsForAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetHistoricalStatsForAccountQueryParams;
}


export class Destiny2GetHistoricalStatsForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
