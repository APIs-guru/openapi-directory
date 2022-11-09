import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetVendorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=characterId" })
  characterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetVendorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: number;
}


export class Destiny2GetVendorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetVendorsPathParams;

  @Metadata()
  queryParams: Destiny2GetVendorsQueryParams;
}


export class Destiny2GetVendorsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
