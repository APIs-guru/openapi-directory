import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2SearchDestinyPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2SearchDestinyPlayerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnOriginalProfile" })
  returnOriginalProfile?: boolean;
}


export class Destiny2SearchDestinyPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2SearchDestinyPlayerPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2SearchDestinyPlayerQueryParams;
}


export class Destiny2SearchDestinyPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
