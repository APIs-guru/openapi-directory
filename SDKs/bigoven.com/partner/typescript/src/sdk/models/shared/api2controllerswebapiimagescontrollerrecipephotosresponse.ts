import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2Photo } from "./bigovenmodelapi2photo";



export class Api2ControllersWebApiImagesControllerRecipePhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResultCount" })
  resultCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: BigOvenModelApi2Photo })
  results?: BigOvenModelApi2Photo[];
}
