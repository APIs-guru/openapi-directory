import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2SearchDestinyEntitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" })
  searchTerm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class Destiny2SearchDestinyEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class Destiny2SearchDestinyEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2SearchDestinyEntitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: Destiny2SearchDestinyEntitiesQueryParams;
}


export class Destiny2SearchDestinyEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
