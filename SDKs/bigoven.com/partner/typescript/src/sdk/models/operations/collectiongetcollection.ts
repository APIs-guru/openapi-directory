import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CollectionGetCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CollectionGetCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sessionForLogging" })
  sessionForLogging?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: boolean;
}


export class CollectionGetCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionGetCollectionPathParams;

  @Metadata()
  queryParams: CollectionGetCollectionQueryParams;
}


export class CollectionGetCollectionResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
