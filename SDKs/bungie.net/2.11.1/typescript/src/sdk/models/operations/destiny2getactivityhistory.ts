import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetActivityHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetActivityHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class Destiny2GetActivityHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetActivityHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetActivityHistoryQueryParams;
}


export class Destiny2GetActivityHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
