import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApi2UserInfoTinyx } from "./bigovenmodelapi2userinfotinyx";


export class BigOvenModelApi2RecipeInfox extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Cuisine" })
  cuisine?: string;

  @Metadata({ data: "json, name=HasVideos" })
  hasVideos?: boolean;

  @Metadata({ data: "json, name=IsBookmark" })
  isBookmark?: boolean;

  @Metadata({ data: "json, name=IsPrivate" })
  isPrivate?: boolean;

  @Metadata({ data: "json, name=IsRecipeScan" })
  isRecipeScan?: boolean;

  @Metadata({ data: "json, name=Microcategory" })
  microcategory?: string;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApi2UserInfoTinyx;

  @Metadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @Metadata({ data: "json, name=ReviewCount" })
  reviewCount?: number;

  @Metadata({ data: "json, name=Servings" })
  servings?: number;

  @Metadata({ data: "json, name=StarRating" })
  starRating?: number;

  @Metadata({ data: "json, name=Subcategory" })
  subcategory?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=TotalTries" })
  totalTries?: number;

  @Metadata({ data: "json, name=WebURL" })
  webUrl?: string;
}
