import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ModelsCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddedCount, form, name=AddedCount;" })
  addedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=FollowersCount, form, name=FollowersCount;" })
  followersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=FollowingCount, form, name=FollowingCount;" })
  followingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PrivateRecipeCount, form, name=PrivateRecipeCount;" })
  privateRecipeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PublicRecipeCount, form, name=PublicRecipeCount;" })
  publicRecipeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecipes, form, name=TotalRecipes;" })
  totalRecipes?: number;
}
