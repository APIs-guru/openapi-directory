import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destinyMembershipId" })
  destinyMembershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemInstanceId" })
  itemInstanceId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class Destiny2GetItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2GetItemPathParams;

  @Metadata()
  queryParams: Destiny2GetItemQueryParams;
}


export class Destiny2GetItemResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
