import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ActiveMinutes" })
  activeMinutes?: number;

  @Metadata({ data: "json, name=AdTags" })
  adTags?: string;

  @Metadata({ data: "json, name=AdminBoost" })
  adminBoost?: number;

  @Metadata({ data: "json, name=AllCategoriesText" })
  allCategoriesText?: string;

  @Metadata({ data: "json, name=BookmarkImageURL" })
  bookmarkImageUrl?: string;

  @Metadata({ data: "json, name=BookmarkSiteLogo" })
  bookmarkSiteLogo?: string;

  @Metadata({ data: "json, name=BookmarkURL" })
  bookmarkUrl?: string;

  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=Collection" })
  collection?: string;

  @Metadata({ data: "json, name=CollectionID" })
  collectionId?: number;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Cuisine" })
  cuisine?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FavoriteCount" })
  favoriteCount?: number;

  @Metadata({ data: "json, name=ImageSquares" })
  imageSquares?: number[];

  @Metadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @Metadata({ data: "json, name=Ingredients", elemType: shared.BigOvenModelApiIngredient })
  ingredients?: BigOvenModelApiIngredient[];

  @Metadata({ data: "json, name=IngredientsTextBlock" })
  ingredientsTextBlock?: string;

  @Metadata({ data: "json, name=Instructions" })
  instructions?: string;

  @Metadata({ data: "json, name=IsBookmark" })
  isBookmark?: boolean;

  @Metadata({ data: "json, name=IsPrivate" })
  isPrivate?: boolean;

  @Metadata({ data: "json, name=IsRecipeScan" })
  isRecipeScan?: boolean;

  @Metadata({ data: "json, name=IsSponsored" })
  isSponsored?: boolean;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @Metadata({ data: "json, name=MedalCount" })
  medalCount?: number;

  @Metadata({ data: "json, name=MenuCount" })
  menuCount?: number;

  @Metadata({ data: "json, name=Microcategory" })
  microcategory?: string;

  @Metadata({ data: "json, name=NotesCount" })
  notesCount?: number;

  @Metadata({ data: "json, name=NutritionInfo" })
  nutritionInfo?: BigOvenModelApiNutritionInfo;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfo;

  @Metadata({ data: "json, name=PrimaryIngredient" })
  primaryIngredient?: string;

  @Metadata({ data: "json, name=RecipeID" })
  recipeId?: number;

  @Metadata({ data: "json, name=ReviewCount" })
  reviewCount?: number;

  @Metadata({ data: "json, name=StarRating" })
  starRating?: number;

  @Metadata({ data: "json, name=Steps", elemType: shared.BigOvenModelInstructionStep })
  steps?: BigOvenModelInstructionStep[];

  @Metadata({ data: "json, name=Subcategory" })
  subcategory?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=TotalMinutes" })
  totalMinutes?: number;

  @Metadata({ data: "json, name=VariantOfRecipeID" })
  variantOfRecipeId?: number;

  @Metadata({ data: "json, name=VerifiedByClass" })
  verifiedByClass?: string;

  @Metadata({ data: "json, name=VerifiedDateTime" })
  verifiedDateTime?: Date;

  @Metadata({ data: "json, name=Videos", elemType: shared.Api2ModelsRecipesRecipeVideoResponse })
  videos?: Api2ModelsRecipesRecipeVideoResponse[];

  @Metadata({ data: "json, name=WebURL" })
  webUrl?: string;

  @Metadata({ data: "json, name=YieldNumber" })
  yieldNumber?: number;

  @Metadata({ data: "json, name=YieldUnit" })
  yieldUnit?: string;
}
