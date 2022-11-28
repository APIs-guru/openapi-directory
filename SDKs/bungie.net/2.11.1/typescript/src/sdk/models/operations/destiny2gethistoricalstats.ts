import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetHistoricalStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetHistoricalStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dayend" })
  dayend?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=daystart" })
  daystart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=groups" })
  groups?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=modes" })
  modes?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodType" })
  periodType?: number;
}


export class Destiny2GetHistoricalStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetHistoricalStatsPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetHistoricalStatsQueryParams;
}


export class Destiny2GetHistoricalStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
