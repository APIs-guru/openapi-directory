import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetCharacterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetCharacterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetCharacterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetCharacterPathParams;

  @Metadata()
  queryParams: Destiny2GetCharacterQueryParams;
}


export class Destiny2GetCharacterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
