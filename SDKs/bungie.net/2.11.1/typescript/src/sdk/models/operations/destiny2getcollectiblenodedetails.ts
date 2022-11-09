import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetCollectibleNodeDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectiblePresentationNodeHash" })
  collectiblePresentationNodeHash: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetCollectibleNodeDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetCollectibleNodeDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetCollectibleNodeDetailsPathParams;

  @Metadata()
  queryParams: Destiny2GetCollectibleNodeDetailsQueryParams;
}


export class Destiny2GetCollectibleNodeDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
