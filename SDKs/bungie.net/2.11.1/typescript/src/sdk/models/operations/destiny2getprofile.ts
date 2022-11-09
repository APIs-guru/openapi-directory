import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetProfilePathParams;

  @Metadata()
  queryParams: Destiny2GetProfileQueryParams;
}


export class Destiny2GetProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
