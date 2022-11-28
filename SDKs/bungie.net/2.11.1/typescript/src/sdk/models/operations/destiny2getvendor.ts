import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetVendorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vendorHash" })
  vendorHash: number;
}


export class Destiny2GetVendorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetVendorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2GetVendorPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2GetVendorQueryParams;
}


export class Destiny2GetVendorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
