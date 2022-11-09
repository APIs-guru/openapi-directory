import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=prefetch" })
  prefetch?: boolean;
}


export class RecipeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeGetPathParams;

  @Metadata()
  queryParams: RecipeGetQueryParams;
}


export class RecipeGetResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2Recipe?: shared.BigOvenModelApi2Recipe;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
