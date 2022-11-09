import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetHistoricalStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetHistoricalStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dayend" })
  dayend?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=daystart" })
  daystart?: Date;

  @Metadata({ data: "queryParam, style=form;explode=false;name=groups" })
  groups?: number[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=modes" })
  modes?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=periodType" })
  periodType?: number;
}


export class Destiny2GetHistoricalStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetHistoricalStatsPathParams;

  @Metadata()
  queryParams: Destiny2GetHistoricalStatsQueryParams;
}


export class Destiny2GetHistoricalStatsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
