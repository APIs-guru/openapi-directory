import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ModelsCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddedCount, form, name=AddedCount;" })
  addedCount?: number;

  @Metadata({ data: "json, name=FollowersCount, form, name=FollowersCount;" })
  followersCount?: number;

  @Metadata({ data: "json, name=FollowingCount, form, name=FollowingCount;" })
  followingCount?: number;

  @Metadata({ data: "json, name=PrivateRecipeCount, form, name=PrivateRecipeCount;" })
  privateRecipeCount?: number;

  @Metadata({ data: "json, name=PublicRecipeCount, form, name=PublicRecipeCount;" })
  publicRecipeCount?: number;

  @Metadata({ data: "json, name=TotalRecipes, form, name=TotalRecipes;" })
  totalRecipes?: number;
}
