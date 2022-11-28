import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiIngredient } from "./bigovenmodelapiingredient";
import { BigOvenModelApiNutritionInfo } from "./bigovenmodelapinutritioninfo";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";
import { BigOvenModelInstructionStep } from "./bigovenmodelinstructionstep";
import { Api2ModelsRecipesRecipeVideoResponse } from "./api2modelsrecipesrecipevideoresponse";



// Api2ModelsRecipesRecipeResponse
/** 
 * DTO used to return a recipe with videos
**/
export class Api2ModelsRecipesRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveMinutes" })
  activeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=AdTags" })
  adTags?: string;

  @SpeakeasyMetadata({ data: "json, name=AdminBoost" })
  adminBoost?: number;

  @SpeakeasyMetadata({ data: "json, name=AllCategoriesText" })
  allCategoriesText?: string;

  @SpeakeasyMetadata({ data: "json, name=BookmarkImageURL" })
  bookmarkImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=BookmarkSiteLogo" })
  bookmarkSiteLogo?: string;

  @SpeakeasyMetadata({ data: "json, name=BookmarkURL" })
  bookmarkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=Collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=CollectionID" })
  collectionId?: number;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Cuisine" })
  cuisine?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FavoriteCount" })
  favoriteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageSquares" })
  imageSquares?: number[];

  @SpeakeasyMetadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Ingredients", elemType: BigOvenModelApiIngredient })
  ingredients?: BigOvenModelApiIngredient[];

  @SpeakeasyMetadata({ data: "json, name=IngredientsTextBlock" })
  ingredientsTextBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=Instructions" })
  instructions?: string;

  @SpeakeasyMetadata({ data: "json, name=IsBookmark" })
  isBookmark?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPrivate" })
  isPrivate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRecipeScan" })
  isRecipeScan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSponsored" })
  isSponsored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @SpeakeasyMetadata({ data: "json, name=MedalCount" })
  medalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MenuCount" })
  menuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Microcategory" })
  microcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=NotesCount" })
  notesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NutritionInfo" })
  nutritionInfo?: BigOvenModelApiNutritionInfo;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfo;

  @SpeakeasyMetadata({ data: "json, name=PrimaryIngredient" })
  primaryIngredient?: string;

  @SpeakeasyMetadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=ReviewCount" })
  reviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StarRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: BigOvenModelInstructionStep })
  steps?: BigOvenModelInstructionStep[];

  @SpeakeasyMetadata({ data: "json, name=Subcategory" })
  subcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalMinutes" })
  totalMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=VariantOfRecipeID" })
  variantOfRecipeId?: number;

  @SpeakeasyMetadata({ data: "json, name=VerifiedByClass" })
  verifiedByClass?: string;

  @SpeakeasyMetadata({ data: "json, name=VerifiedDateTime" })
  verifiedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Videos", elemType: Api2ModelsRecipesRecipeVideoResponse })
  videos?: Api2ModelsRecipesRecipeVideoResponse[];

  @SpeakeasyMetadata({ data: "json, name=WebURL" })
  webUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=YieldNumber" })
  yieldNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=YieldUnit" })
  yieldUnit?: string;
}
