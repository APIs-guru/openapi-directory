import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetActivityHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetActivityHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class Destiny2GetActivityHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetActivityHistoryPathParams;

  @Metadata()
  queryParams: Destiny2GetActivityHistoryQueryParams;
}


export class Destiny2GetActivityHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
