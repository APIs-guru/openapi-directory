import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetCharacterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetCharacterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetCharacterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetCharacterPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetCharacterQueryParams;
}


export class Destiny2GetCharacterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
