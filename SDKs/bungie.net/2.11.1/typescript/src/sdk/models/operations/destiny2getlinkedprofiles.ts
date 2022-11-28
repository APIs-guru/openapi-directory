import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetLinkedProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetLinkedProfilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getAllMemberships" })
  getAllMemberships?: boolean;
}


export class Destiny2GetLinkedProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetLinkedProfilesPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetLinkedProfilesQueryParams;
}


export class Destiny2GetLinkedProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
