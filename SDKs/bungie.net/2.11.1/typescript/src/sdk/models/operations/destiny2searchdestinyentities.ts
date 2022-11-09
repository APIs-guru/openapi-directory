import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2SearchDestinyEntitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class Destiny2SearchDestinyEntitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class Destiny2SearchDestinyEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2SearchDestinyEntitiesPathParams;

  @Metadata()
  queryParams: Destiny2SearchDestinyEntitiesQueryParams;
}


export class Destiny2SearchDestinyEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
