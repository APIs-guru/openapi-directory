import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefetch" })
  prefetch?: boolean;
}


export class RecipeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: RecipeGetQueryParams;
}


export class RecipeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2Recipe?: shared.BigOvenModelApi2Recipe;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
