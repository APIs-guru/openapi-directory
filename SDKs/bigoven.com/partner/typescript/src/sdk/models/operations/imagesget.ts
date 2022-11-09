import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImagesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ImagesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImagesGetPathParams;
}


export class ImagesGetResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelApiImage })
  bigOvenModelApiImages?: shared.BigOvenModelApiImage[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
