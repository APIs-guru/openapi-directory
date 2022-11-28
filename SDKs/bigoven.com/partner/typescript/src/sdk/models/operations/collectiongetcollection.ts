import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionGetCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CollectionGetCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionForLogging" })
  sessionForLogging?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: boolean;
}


export class CollectionGetCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionGetCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: CollectionGetCollectionQueryParams;
}


export class CollectionGetCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
