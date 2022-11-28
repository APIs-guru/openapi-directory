import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecipeDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeDeletePathParams;
}


export class RecipeDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
