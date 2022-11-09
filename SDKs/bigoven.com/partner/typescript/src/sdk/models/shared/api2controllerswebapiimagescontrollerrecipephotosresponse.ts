import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigOvenModelApi2Photo } from "./bigovenmodelapi2photo";


export class Api2ControllersWebApiImagesControllerRecipePhotosResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResultCount" })
  resultCount?: number;

  @Metadata({ data: "json, name=Results", elemType: shared.BigOvenModelApi2Photo })
  results?: BigOvenModelApi2Photo[];
}
