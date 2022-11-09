import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetLinkedProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetLinkedProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=getAllMemberships" })
  getAllMemberships?: boolean;
}


export class Destiny2GetLinkedProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetLinkedProfilesPathParams;

  @Metadata()
  queryParams: Destiny2GetLinkedProfilesQueryParams;
}


export class Destiny2GetLinkedProfilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
