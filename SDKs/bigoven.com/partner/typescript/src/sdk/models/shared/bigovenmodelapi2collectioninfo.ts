import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";



export class BigOvenModelApi2CollectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IsFiltered" })
  isFiltered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSponsored" })
  isSponsored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MobileUrl" })
  mobileUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PRO" })
  pro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: BigOvenModelApi2RecipeInfox })
  results?: BigOvenModelApi2RecipeInfox[];

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=WebUrl" })
  webUrl?: string;
}
