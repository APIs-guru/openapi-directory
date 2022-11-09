import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecipeDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RecipeDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeDeletePathParams;
}


export class RecipeDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
