import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigOvenModelApi2RecipeInfox } from "./bigovenmodelapi2recipeinfox";


export class BigOvenModelApi2CollectionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ID" })
  id?: number;

  @Metadata({ data: "json, name=IsFiltered" })
  isFiltered?: boolean;

  @Metadata({ data: "json, name=IsSponsored" })
  isSponsored?: boolean;

  @Metadata({ data: "json, name=MobileUrl" })
  mobileUrl?: string;

  @Metadata({ data: "json, name=PRO" })
  pro?: boolean;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=Results", elemType: shared.BigOvenModelApi2RecipeInfox })
  results?: BigOvenModelApi2RecipeInfox[];

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Token" })
  token?: string;

  @Metadata({ data: "json, name=WebUrl" })
  webUrl?: string;
}
