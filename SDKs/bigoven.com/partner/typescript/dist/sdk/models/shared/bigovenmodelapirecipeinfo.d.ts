import { SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiUserInfoInput } from "./bigovenmodelapiuserinfo";
export declare class BigOvenModelApiRecipeInfoInput extends SpeakeasyBase {
    bookmarkUrl?: string;
    category?: string;
    creationDate?: Date;
    cuisine?: string;
    hasVideos?: boolean;
    heroPhotoUrl?: string;
    hideFromPublicSearch?: boolean;
    imageUrl?: string;
    imageUrl120?: string;
    isBookmark?: boolean;
    isPrivate?: boolean;
    maxImageSquare?: number;
    microcategory?: string;
    poster?: BigOvenModelApiUserInfoInput;
    qualityScore?: number;
    recipeId?: number;
    reviewCount?: number;
    starRating?: number;
    starRatingImg?: string;
    subcategory?: string;
    title?: string;
    totalTries?: number;
    webUrl?: string;
    yieldNumber?: number;
}
