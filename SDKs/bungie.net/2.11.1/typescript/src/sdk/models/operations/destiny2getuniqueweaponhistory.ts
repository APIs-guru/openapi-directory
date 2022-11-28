import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetUniqueWeaponHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetUniqueWeaponHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetUniqueWeaponHistoryPathParams;
}


export class Destiny2GetUniqueWeaponHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
