import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImagesGetScanImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ImagesGetScanImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImagesGetScanImagesPathParams;
}


export class ImagesGetScanImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelApiImage })
  bigOvenModelApiImages?: shared.BigOvenModelApiImage[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
