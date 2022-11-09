import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetVendorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vendorHash" })
  vendorHash: number;
}


export class Destiny2GetVendorQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetVendorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetVendorPathParams;

  @Metadata()
  queryParams: Destiny2GetVendorQueryParams;
}


export class Destiny2GetVendorResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
