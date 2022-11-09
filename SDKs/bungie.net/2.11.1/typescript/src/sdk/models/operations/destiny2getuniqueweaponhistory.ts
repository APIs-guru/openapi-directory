import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetUniqueWeaponHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetUniqueWeaponHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetUniqueWeaponHistoryPathParams;
}


export class Destiny2GetUniqueWeaponHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
