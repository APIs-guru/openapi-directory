import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2SearchDestinyPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=displayName" })
  displayName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2SearchDestinyPlayerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=returnOriginalProfile" })
  returnOriginalProfile?: boolean;
}


export class Destiny2SearchDestinyPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2SearchDestinyPlayerPathParams;

  @Metadata()
  queryParams: Destiny2SearchDestinyPlayerQueryParams;
}


export class Destiny2SearchDestinyPlayerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
