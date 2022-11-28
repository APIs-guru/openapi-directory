# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ArticleGetRequest, ArticleGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ArticleGetRequest = {
  pathParams: {
    uniqueKeyword: "maxime",
  },
};

sdk.sdk.articleGet(req).then((res: ArticleGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `articleGet` - Get a food article
* `collectionCollections` - Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
* `collectionGetCollection` - Gets a recipe collection. A recipe collection is a curated set of recipes.
* `collectionGetCollectionMeta` - Gets a recipe collection metadata. A recipe collection is a curated set of recipes.
* `getRecipeRecipeIdReview` - Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers
* `getRecipeReviewReviewId` - Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
            Recommended display is to list top-level reviews with one featured reply underneath. 
            Currently, the FeaturedReply is the most recent one for that rating.
* `groceryListAddRecipe` - Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
            the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.
* `groceryListDelete` - Delete all the items on a grocery list; faster operation than a sync with deleted items.
* `groceryListDeleteItemByGuid` - /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
* `groceryListDepartment` - Departmentalize a list of strings -- used for ad-hoc grocery list item addition
* `groceryListGet` - Get the user's grocery list.  User is determined by Basic Authentication.
* `groceryListGroceryListItemGuid` - Update a grocery item by GUID
* `groceryListGroceryListRemoveMarkedItems` - Clears the checked lines.
* `groceryListPost` - Add a single line item to the grocery list
* `imagesGet` - Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
* `imagesGetPendingByUser` - Gets the pending by user.
* `imagesGetRecipePhotos` - Get all the photos for a recipe
* `imagesGetScanImages` - Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
* `imagesUploadRecipeImage` - POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
             
             Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
             needs a multipart/mime content header and will not parse JSON in the body along with it.
            
             Testing with Postman (validated 11/20/2015):
             1) Remove the Content-Type header; add authentication information
             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
             change the type of the input from Text to File.  Browse and choose a JPG.
* `imagesUploadUserAvatar` - POST: /image/avatar
             
            Testing with Postman (validated 11/20/2015):
            1) Remove the Content-Type header; add authentication information
            2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
            change the type of the input from Text to File.  Browse and choose a JPG.
* `meGetOptions` - Gets the options.
* `meIndex` - Indexes this instance.
* `mePutMe` - Puts me.
* `mePutMePersonal` - Puts me personal.
* `mePutMePreferences` - Puts me preferences.
* `meSkinny` - Skinnies this instance.
* `noteDelete` - Delete a review
                do a DELETE Http request of /note/{ID}
* `noteGet` - Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.
* `noteGetNotes` - recipe/100/notes
* `notePost` - HTTP POST a new note into the system.
* `notePut` - HTTP PUT (update) a Recipe note (RecipeNote).
* `postGrocerylistItem` - Add a single line item to the grocery list
* `putMeProfile` - Puts me.
* `recipeAutoComplete` - Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
* `recipeAutoCompleteAllRecipes` - Automatics the complete all recipes.
* `recipeAutoCompleteMyRecipes` - Automatics the complete my recipes.
* `recipeCategories` - Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
* `recipeDelete` - Delete a Recipe (you must be authenticated as an owner of the recipe)
* `recipeFeedback` - Feedback on a Recipe -- for internal BigOven editors
* `recipeGet` - Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
* `recipeGetActiveRecipe` - Returns last active recipe for the user
* `recipeGetRandomRecipe` - Get a random, home-page-quality Recipe.
* `recipeGetRecipeWithSteps` - Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
* `recipeGetStep` - Gets recipe single step as text
* `recipeGetStepNumber` - Returns stored step number and number of steps in recipe
* `recipeGetSteps` - Stores recipe step number and returns saved step data
* `recipeGetV2` - Same as GET recipe but also includes the recipe videos (if any)
* `recipeRaves` - Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
* `recipeRecentViews` - Get a list of recipes that the authenticated user has most recently viewed
* `recipeRecipeSearch` - Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
            Use any_kw to search across the entire recipe.
            If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
            If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
            If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
            To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
            To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
            All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
            So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
            If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
            Or, you can set username=theirusername
            vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
            cuisine
            photos
            filter=added,try,favorites,myrecipes\r\n\r\n
            folder=FolderNameCaseSensitive
            coll=ID of Collection
* `recipeRecipeSearchRandom` - Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
            Use any_kw to search across the entire recipe.
            If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
            If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
            If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
            To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
            To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
            All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
            So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
            If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
            Or, you can set username=theirusername
            vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
            cuisine
            photos
            filter=added,try,favorites,myrecipes\r\n\r\n
            folder=FolderNameCaseSensitive
            coll=ID of Collection
* `recipeRelated` - Get recipes related to the given recipeId
* `recipeScan` - POST an image as a new RecipeScan request
                1)  Fetch the filename -- DONE
                2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
                3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
                4)  Insert the CloudTasks record
                5)  Create the HIT
                6)  Update the CloudTasks record with the HIT ID
                7)  Email the requesing user
                8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
* `recipeZapRecipe` - Zaps the recipe.
* `reviewDelete` - DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
* `reviewDeleteReply` - DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
* `reviewGet` - Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
            Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
            We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then
            an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review 
            per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
            which do NOT carry the "DEPRECATED" flag.
* `reviewGetReplies` - Get a paged list of replies for a given review.
* `reviewGetReviews` - Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
* `reviewPost` - Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
* `reviewPostReply` - POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
* `reviewPut` - Update a given top-level review.
* `reviewPutLegacy` - HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
            We are moving to a string-based primary key system, no longer integers, for reviews and replies.
* `reviewPutReply` - Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
