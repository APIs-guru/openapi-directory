import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetCollectibleNodeDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectiblePresentationNodeHash" })
  collectiblePresentationNodeHash: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetCollectibleNodeDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetCollectibleNodeDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetCollectibleNodeDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetCollectibleNodeDetailsQueryParams;
}


export class Destiny2GetCollectibleNodeDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
