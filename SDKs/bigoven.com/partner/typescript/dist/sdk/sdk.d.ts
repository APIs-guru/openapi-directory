import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api2.bigoven.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * articleGet - Get a food article
    **/
    articleGet(req: operations.ArticleGetRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetResponse>;
    /**
     * collectionCollections - Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
    **/
    collectionCollections(req: operations.CollectionCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionCollectionsResponse>;
    /**
     * collectionGetCollection - Gets a recipe collection. A recipe collection is a curated set of recipes.
    **/
    collectionGetCollection(req: operations.CollectionGetCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CollectionGetCollectionResponse>;
    /**
     * collectionGetCollectionMeta - Gets a recipe collection metadata. A recipe collection is a curated set of recipes.
    **/
    collectionGetCollectionMeta(req: operations.CollectionGetCollectionMetaRequest, config?: AxiosRequestConfig): Promise<operations.CollectionGetCollectionMetaResponse>;
    /**
     * getRecipeRecipeIdReview - Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers
    **/
    getRecipeRecipeIdReview(req: operations.GetRecipeRecipeIdReviewRequest, config?: AxiosRequestConfig): Promise<operations.GetRecipeRecipeIdReviewResponse>;
    /**
     * getRecipeReviewReviewId - Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
     *             Recommended display is to list top-level reviews with one featured reply underneath.
     *             Currently, the FeaturedReply is the most recent one for that rating.
    **/
    getRecipeReviewReviewId(req: operations.GetRecipeReviewReviewIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRecipeReviewReviewIdResponse>;
    /**
     * groceryListAddRecipe - Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
     *             the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.
    **/
    groceryListAddRecipe(req: operations.GroceryListAddRecipeRequest, config?: AxiosRequestConfig): Promise<operations.GroceryListAddRecipeResponse>;
    /**
     * groceryListDelete - Delete all the items on a grocery list; faster operation than a sync with deleted items.
    **/
    groceryListDelete(config?: AxiosRequestConfig): Promise<operations.GroceryListDeleteResponse>;
    /**
     * groceryListDeleteItemByGuid - /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
    **/
    groceryListDeleteItemByGuid(req: operations.GroceryListDeleteItemByGuidRequest, config?: AxiosRequestConfig): Promise<operations.GroceryListDeleteItemByGuidResponse>;
    /**
     * groceryListDepartment - Departmentalize a list of strings -- used for ad-hoc grocery list item addition
    **/
    groceryListDepartment(req: operations.GroceryListDepartmentRequest, config?: AxiosRequestConfig): Promise<operations.GroceryListDepartmentResponse>;
    /**
     * groceryListGet - Get the user's grocery list.  User is determined by Basic Authentication.
    **/
    groceryListGet(config?: AxiosRequestConfig): Promise<operations.GroceryListGetResponse>;
    /**
     * groceryListGroceryListItemGuid - Update a grocery item by GUID
    **/
    groceryListGroceryListItemGuid(req: operations.GroceryListGroceryListItemGuidRequest, config?: AxiosRequestConfig): Promise<operations.GroceryListGroceryListItemGuidResponse>;
    /**
     * groceryListGroceryListRemoveMarkedItems - Clears the checked lines.
    **/
    groceryListGroceryListRemoveMarkedItems(config?: AxiosRequestConfig): Promise<operations.GroceryListGroceryListRemoveMarkedItemsResponse>;
    /**
     * groceryListPost - Add a single line item to the grocery list
    **/
    groceryListPost(req: operations.GroceryListPostRequest, config?: AxiosRequestConfig): Promise<operations.GroceryListPostResponse>;
    /**
     * imagesGet - Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
    **/
    imagesGet(req: operations.ImagesGetRequest, config?: AxiosRequestConfig): Promise<operations.ImagesGetResponse>;
    /**
     * imagesGetPendingByUser - Gets the pending by user.
    **/
    imagesGetPendingByUser(config?: AxiosRequestConfig): Promise<operations.ImagesGetPendingByUserResponse>;
    /**
     * imagesGetRecipePhotos - Get all the photos for a recipe
    **/
    imagesGetRecipePhotos(req: operations.ImagesGetRecipePhotosRequest, config?: AxiosRequestConfig): Promise<operations.ImagesGetRecipePhotosResponse>;
    /**
     * imagesGetScanImages - Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
    **/
    imagesGetScanImages(req: operations.ImagesGetScanImagesRequest, config?: AxiosRequestConfig): Promise<operations.ImagesGetScanImagesResponse>;
    /**
     * imagesUploadRecipeImage - POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
     *
     *              Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
     *              needs a multipart/mime content header and will not parse JSON in the body along with it.
     *
     *              Testing with Postman (validated 11/20/2015):
     *              1) Remove the Content-Type header; add authentication information
     *              2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
     *              change the type of the input from Text to File.  Browse and choose a JPG.
    **/
    imagesUploadRecipeImage(req: operations.ImagesUploadRecipeImageRequest, config?: AxiosRequestConfig): Promise<operations.ImagesUploadRecipeImageResponse>;
    /**
     * imagesUploadUserAvatar - POST: /image/avatar
     *
     *             Testing with Postman (validated 11/20/2015):
     *             1) Remove the Content-Type header; add authentication information
     *             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
     *             change the type of the input from Text to File.  Browse and choose a JPG.
    **/
    imagesUploadUserAvatar(config?: AxiosRequestConfig): Promise<operations.ImagesUploadUserAvatarResponse>;
    /**
     * meGetOptions - Gets the options.
    **/
    meGetOptions(config?: AxiosRequestConfig): Promise<operations.MeGetOptionsResponse>;
    /**
     * meIndex - Indexes this instance.
    **/
    meIndex(config?: AxiosRequestConfig): Promise<operations.MeIndexResponse>;
    /**
     * mePutMe - Puts me.
    **/
    mePutMe(req: operations.MePutMeRequest, config?: AxiosRequestConfig): Promise<operations.MePutMeResponse>;
    /**
     * mePutMePersonal - Puts me personal.
    **/
    mePutMePersonal(req: operations.MePutMePersonalRequest, config?: AxiosRequestConfig): Promise<operations.MePutMePersonalResponse>;
    /**
     * mePutMePreferences - Puts me preferences.
    **/
    mePutMePreferences(req: operations.MePutMePreferencesRequest, config?: AxiosRequestConfig): Promise<operations.MePutMePreferencesResponse>;
    /**
     * meSkinny - Skinnies this instance.
    **/
    meSkinny(config?: AxiosRequestConfig): Promise<operations.MeSkinnyResponse>;
    /**
     * noteDelete - Delete a review
     *                 do a DELETE Http request of /note/{ID}
    **/
    noteDelete(req: operations.NoteDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NoteDeleteResponse>;
    /**
     * noteGet - Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.
    **/
    noteGet(req: operations.NoteGetRequest, config?: AxiosRequestConfig): Promise<operations.NoteGetResponse>;
    /**
     * noteGetNotes - recipe/100/notes
    **/
    noteGetNotes(req: operations.NoteGetNotesRequest, config?: AxiosRequestConfig): Promise<operations.NoteGetNotesResponse>;
    /**
     * notePost - HTTP POST a new note into the system.
    **/
    notePost(req: operations.NotePostRequest, config?: AxiosRequestConfig): Promise<operations.NotePostResponse>;
    /**
     * notePut - HTTP PUT (update) a Recipe note (RecipeNote).
    **/
    notePut(req: operations.NotePutRequest, config?: AxiosRequestConfig): Promise<operations.NotePutResponse>;
    /**
     * postGrocerylistItem - Add a single line item to the grocery list
    **/
    postGrocerylistItem(req: operations.PostGrocerylistItemRequest, config?: AxiosRequestConfig): Promise<operations.PostGrocerylistItemResponse>;
    /**
     * putMeProfile - Puts me.
    **/
    putMeProfile(req: operations.PutMeProfileRequest, config?: AxiosRequestConfig): Promise<operations.PutMeProfileResponse>;
    /**
     * recipeAutoComplete - Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
    **/
    recipeAutoComplete(req: operations.RecipeAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.RecipeAutoCompleteResponse>;
    /**
     * recipeAutoCompleteAllRecipes - Automatics the complete all recipes.
    **/
    recipeAutoCompleteAllRecipes(req: operations.RecipeAutoCompleteAllRecipesRequest, config?: AxiosRequestConfig): Promise<operations.RecipeAutoCompleteAllRecipesResponse>;
    /**
     * recipeAutoCompleteMyRecipes - Automatics the complete my recipes.
    **/
    recipeAutoCompleteMyRecipes(req: operations.RecipeAutoCompleteMyRecipesRequest, config?: AxiosRequestConfig): Promise<operations.RecipeAutoCompleteMyRecipesResponse>;
    /**
     * recipeCategories - Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
    **/
    recipeCategories(config?: AxiosRequestConfig): Promise<operations.RecipeCategoriesResponse>;
    /**
     * recipeDelete - Delete a Recipe (you must be authenticated as an owner of the recipe)
    **/
    recipeDelete(req: operations.RecipeDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RecipeDeleteResponse>;
    /**
     * recipeFeedback - Feedback on a Recipe -- for internal BigOven editors
    **/
    recipeFeedback(req: operations.RecipeFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.RecipeFeedbackResponse>;
    /**
     * recipeGet - Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
    **/
    recipeGet(req: operations.RecipeGetRequest, config?: AxiosRequestConfig): Promise<operations.RecipeGetResponse>;
    /**
     * recipeGetActiveRecipe - Returns last active recipe for the user
    **/
    recipeGetActiveRecipe(req: operations.RecipeGetActiveRecipeRequest, config?: AxiosRequestConfig): Promise<operations.RecipeGetActiveRecipeResponse>;
    /**
     * recipeGetRandomRecipe - Get a random, home-page-quality Recipe.
    **/
    recipeGetRandomRecipe(config?: AxiosRequestConfig): Promise<operations.RecipeGetRandomRecipeResponse>;
    /**
     * recipeGetRecipeWithSteps - Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
    **/
    recipeGetRecipeWithSteps(req: operations.RecipeGetRecipeWithStepsRequest, config?: AxiosRequestConfig): Promise<operations.RecipeGetRecipeWithStepsResponse>;
    /**
     * recipeGetStep - Gets recipe single step as text
    **/
    recipeGetStep(req: operations.RecipeGetStepRequest, config?: AxiosRequestConfig): Promise<operations.RecipeGetStepResponse>;
    /**
     * recipeGetStepNumber - Returns stored step number and number of steps in recipe
    **/
    recipeGetStepNumber(req: operations.RecipeGetStepNumberRequest, config?: AxiosRequestConfig): Promise<operations.RecipeGetStepNumberResponse>;
    /**
     * recipeGetSteps - Stores recipe step number and returns saved step data
    **/
    recipeGetSteps(req: operations.RecipeGetStepsRequest, config?: AxiosRequestConfig): Promise<operations.RecipeGetStepsResponse>;
    /**
     * recipeGetV2 - Same as GET recipe but also includes the recipe videos (if any)
    **/
    recipeGetV2(req: operations.RecipeGetV2Request, config?: AxiosRequestConfig): Promise<operations.RecipeGetV2Response>;
    /**
     * recipeRaves - Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
    **/
    recipeRaves(req: operations.RecipeRavesRequest, config?: AxiosRequestConfig): Promise<operations.RecipeRavesResponse>;
    /**
     * recipeRecentViews - Get a list of recipes that the authenticated user has most recently viewed
    **/
    recipeRecentViews(req: operations.RecipeRecentViewsRequest, config?: AxiosRequestConfig): Promise<operations.RecipeRecentViewsResponse>;
    /**
     * recipeRecipeSearch - Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
     *             Use any_kw to search across the entire recipe.
     *             If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
     *             If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
     *             If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
     *             To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
     *             To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
     *             All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
     *             So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
     *             If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
     *             Or, you can set username=theirusername
     *             vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
     *             cuisine
     *             photos
     *             filter=added,try,favorites,myrecipes\r\n\r\n
     *             folder=FolderNameCaseSensitive
     *             coll=ID of Collection
    **/
    recipeRecipeSearch(req: operations.RecipeRecipeSearchRequest, config?: AxiosRequestConfig): Promise<operations.RecipeRecipeSearchResponse>;
    /**
     * recipeRecipeSearchRandom - Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
     *             Use any_kw to search across the entire recipe.
     *             If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
     *             If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
     *             If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
     *             To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
     *             To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
     *             All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
     *             So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
     *             If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
     *             Or, you can set username=theirusername
     *             vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
     *             cuisine
     *             photos
     *             filter=added,try,favorites,myrecipes\r\n\r\n
     *             folder=FolderNameCaseSensitive
     *             coll=ID of Collection
    **/
    recipeRecipeSearchRandom(req: operations.RecipeRecipeSearchRandomRequest, config?: AxiosRequestConfig): Promise<operations.RecipeRecipeSearchRandomResponse>;
    /**
     * recipeRelated - Get recipes related to the given recipeId
    **/
    recipeRelated(req: operations.RecipeRelatedRequest, config?: AxiosRequestConfig): Promise<operations.RecipeRelatedResponse>;
    /**
     * recipeScan - POST an image as a new RecipeScan request
     *                 1)  Fetch the filename -- DONE
     *                 2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
     *                 3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
     *                 4)  Insert the CloudTasks record
     *                 5)  Create the HIT
     *                 6)  Update the CloudTasks record with the HIT ID
     *                 7)  Email the requesing user
     *                 8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
    **/
    recipeScan(req: operations.RecipeScanRequest, config?: AxiosRequestConfig): Promise<operations.RecipeScanResponse>;
    /**
     * recipeZapRecipe - Zaps the recipe.
    **/
    recipeZapRecipe(req: operations.RecipeZapRecipeRequest, config?: AxiosRequestConfig): Promise<operations.RecipeZapRecipeResponse>;
    /**
     * reviewDelete - DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
    **/
    reviewDelete(req: operations.ReviewDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReviewDeleteResponse>;
    /**
     * reviewDeleteReply - DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
    **/
    reviewDeleteReply(req: operations.ReviewDeleteReplyRequest, config?: AxiosRequestConfig): Promise<operations.ReviewDeleteReplyResponse>;
    /**
     * reviewGet - Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
     *             Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
     *             We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then
     *             an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review
     *             per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
     *             which do NOT carry the "DEPRECATED" flag.
    **/
    reviewGet(req: operations.ReviewGetRequest, config?: AxiosRequestConfig): Promise<operations.ReviewGetResponse>;
    /**
     * reviewGetReplies - Get a paged list of replies for a given review.
    **/
    reviewGetReplies(req: operations.ReviewGetRepliesRequest, config?: AxiosRequestConfig): Promise<operations.ReviewGetRepliesResponse>;
    /**
     * reviewGetReviews - Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
    **/
    reviewGetReviews(req: operations.ReviewGetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.ReviewGetReviewsResponse>;
    /**
     * reviewPost - Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
    **/
    reviewPost(req: operations.ReviewPostRequest, config?: AxiosRequestConfig): Promise<operations.ReviewPostResponse>;
    /**
     * reviewPostReply - POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
    **/
    reviewPostReply(req: operations.ReviewPostReplyRequest, config?: AxiosRequestConfig): Promise<operations.ReviewPostReplyResponse>;
    /**
     * reviewPut - Update a given top-level review.
    **/
    reviewPut(req: operations.ReviewPutRequest, config?: AxiosRequestConfig): Promise<operations.ReviewPutResponse>;
    /**
     * reviewPutLegacy - HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
     *             We are moving to a string-based primary key system, no longer integers, for reviews and replies.
    **/
    reviewPutLegacy(req: operations.ReviewPutLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReviewPutLegacyResponse>;
    /**
     * reviewPutReply - Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.
    **/
    reviewPutReply(req: operations.ReviewPutReplyRequest, config?: AxiosRequestConfig): Promise<operations.ReviewPutReplyResponse>;
}
export {};
