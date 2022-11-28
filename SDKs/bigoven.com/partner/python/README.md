# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ArticleGetRequest(
    path_params=operations.ArticleGetPathParams(
        unique_keyword="maxime",
    ),
)
    
res = s.sdk.article_get(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `article_get` - Get a food article
* `collection_collections` - Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.
* `collection_get_collection` - Gets a recipe collection. A recipe collection is a curated set of recipes.
* `collection_get_collection_meta` - Gets a recipe collection metadata. A recipe collection is a curated set of recipes.
* `get_recipe_recipe_id_review` - Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers
* `get_recipe_review_review_id_` - Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
            Recommended display is to list top-level reviews with one featured reply underneath. 
            Currently, the FeaturedReply is the most recent one for that rating.
* `grocery_list_add_recipe` - Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
            the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.
* `grocery_list_delete` - Delete all the items on a grocery list; faster operation than a sync with deleted items.
* `grocery_list_delete_item_by_guid` - /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
* `grocery_list_department` - Departmentalize a list of strings -- used for ad-hoc grocery list item addition
* `grocery_list_get` - Get the user's grocery list.  User is determined by Basic Authentication.
* `grocery_list_grocery_list_item_guid` - Update a grocery item by GUID
* `grocery_list_grocery_list_remove_marked_items` - Clears the checked lines.
* `grocery_list_post` - Add a single line item to the grocery list
* `images_get` - Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.
* `images_get_pending_by_user` - Gets the pending by user.
* `images_get_recipe_photos` - Get all the photos for a recipe
* `images_get_scan_images` - Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.
* `images_upload_recipe_image` - POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
             
             Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
             needs a multipart/mime content header and will not parse JSON in the body along with it.
            
             Testing with Postman (validated 11/20/2015):
             1) Remove the Content-Type header; add authentication information
             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
             change the type of the input from Text to File.  Browse and choose a JPG.
* `images_upload_user_avatar` - POST: /image/avatar
             
            Testing with Postman (validated 11/20/2015):
            1) Remove the Content-Type header; add authentication information
            2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
            change the type of the input from Text to File.  Browse and choose a JPG.
* `me_get_options` - Gets the options.
* `me_index` - Indexes this instance.
* `me_put_me` - Puts me.
* `me_put_me_personal` - Puts me personal.
* `me_put_me_preferences` - Puts me preferences.
* `me_skinny` - Skinnies this instance.
* `note_delete` - Delete a review
                do a DELETE Http request of /note/{ID}
* `note_get` - Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.
* `note_get_notes` - recipe/100/notes
* `note_post` - HTTP POST a new note into the system.
* `note_put` - HTTP PUT (update) a Recipe note (RecipeNote).
* `post_grocerylist_item` - Add a single line item to the grocery list
* `put_me_profile` - Puts me.
* `recipe_auto_complete` - Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.
* `recipe_auto_complete_all_recipes` - Automatics the complete all recipes.
* `recipe_auto_complete_my_recipes` - Automatics the complete my recipes.
* `recipe_categories` - Get a list of recipe categories (the ID field can be used for include_cat in search parameters)
* `recipe_delete` - Delete a Recipe (you must be authenticated as an owner of the recipe)
* `recipe_feedback` - Feedback on a Recipe -- for internal BigOven editors
* `recipe_get` - Return full Recipe detail. Returns 403 if the recipe is owned by someone else.
* `recipe_get_active_recipe` - Returns last active recipe for the user
* `recipe_get_random_recipe` - Get a random, home-page-quality Recipe.
* `recipe_get_recipe_with_steps` - Return full Recipe detail with steps. Returns 403 if the recipe is owned by someone else.
* `recipe_get_step` - Gets recipe single step as text
* `recipe_get_step_number` - Returns stored step number and number of steps in recipe
* `recipe_get_steps` - Stores recipe step number and returns saved step data
* `recipe_get_v2` - Same as GET recipe but also includes the recipe videos (if any)
* `recipe_raves` - Get the recipe/comment tuples for those recipes with 4 or 5 star ratings
* `recipe_recent_views` - Get a list of recipes that the authenticated user has most recently viewed
* `recipe_recipe_search` - Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
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
* `recipe_recipe_search_random` - Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
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
* `recipe_related` - Get recipes related to the given recipeId
* `recipe_scan` - POST an image as a new RecipeScan request
                1)  Fetch the filename -- DONE
                2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
                3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
                4)  Insert the CloudTasks record
                5)  Create the HIT
                6)  Update the CloudTasks record with the HIT ID
                7)  Email the requesing user
                8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail
* `recipe_zap_recipe` - Zaps the recipe.
* `review_delete` - DEPRECATED! - Deletes a review by recipeId and reviewId. Please use recipe/review/{reviewId} instead.
* `review_delete_reply` - DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.
* `review_get` - Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
            Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
            We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then
            an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review 
            per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
            which do NOT carry the "DEPRECATED" flag.
* `review_get_replies` - Get a paged list of replies for a given review.
* `review_get_reviews` - Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.
* `review_post` - Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.
* `review_post_reply` - POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.
* `review_put` - Update a given top-level review.
* `review_put_legacy` - HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
            We are moving to a string-based primary key system, no longer integers, for reviews and replies.
* `review_put_reply` - Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
