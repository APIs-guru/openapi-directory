import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2UserInfoTinyx } from "./bigovenmodelapi2userinfotinyx";



export class BigOvenModelApi2RecipeInfox extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Cuisine" })
  cuisine?: string;

  @SpeakeasyMetadata({ data: "json, name=HasVideos" })
  hasVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsBookmark" })
  isBookmark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPrivate" })
  isPrivate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRecipeScan" })
  isRecipeScan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Microcategory" })
  microcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApi2UserInfoTinyx;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=ReviewCount" })
  reviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Servings" })
  servings?: number;

  @SpeakeasyMetadata({ data: "json, name=StarRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=Subcategory" })
  subcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalTries" })
  totalTries?: number;

  @SpeakeasyMetadata({ data: "json, name=WebURL" })
  webUrl?: string;
}
