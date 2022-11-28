import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiUserInfoInput } from "./bigovenmodelapiuserinfo";



export class BigOvenModelApiRecipeInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BookmarkURL" })
  bookmarkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Cuisine" })
  cuisine?: string;

  @SpeakeasyMetadata({ data: "json, name=HasVideos" })
  hasVideos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HeroPhotoUrl" })
  heroPhotoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=HideFromPublicSearch" })
  hideFromPublicSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL120" })
  imageUrl120?: string;

  @SpeakeasyMetadata({ data: "json, name=IsBookmark" })
  isBookmark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPrivate" })
  isPrivate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @SpeakeasyMetadata({ data: "json, name=Microcategory" })
  microcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfoInput;

  @SpeakeasyMetadata({ data: "json, name=QualityScore" })
  qualityScore?: number;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=ReviewCount" })
  reviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StarRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=StarRatingIMG" })
  starRatingImg?: string;

  @SpeakeasyMetadata({ data: "json, name=Subcategory" })
  subcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalTries" })
  totalTries?: number;

  @SpeakeasyMetadata({ data: "json, name=WebURL" })
  webUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=YieldNumber" })
  yieldNumber?: number;
}
