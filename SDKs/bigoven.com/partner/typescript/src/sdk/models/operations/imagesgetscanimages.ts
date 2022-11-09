import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImagesGetScanImagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ImagesGetScanImagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImagesGetScanImagesPathParams;
}


export class ImagesGetScanImagesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelApiImage })
  bigOvenModelApiImages?: shared.BigOvenModelApiImage[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
