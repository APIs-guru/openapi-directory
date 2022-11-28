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
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BuildBotLocaleRequest(
    path_params=operations.BuildBotLocalePathParams(
        bot_id="ea",
        bot_version="voluptate",
        locale_id="et",
    ),
    headers=operations.BuildBotLocaleHeaders(
        x_amz_algorithm="consequatur",
        x_amz_content_sha256="aliquam",
        x_amz_credential="molestiae",
        x_amz_date="repellat",
        x_amz_security_token="ut",
        x_amz_signature="necessitatibus",
        x_amz_signed_headers="deserunt",
    ),
)
    
res = s.sdk.build_bot_locale(req)

if res.build_bot_locale_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `build_bot_locale` - Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
* `create_bot` - Creates an Amazon Lex conversational bot. 
* `create_bot_alias` - <p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>
* `create_bot_locale` - Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
* `create_bot_version` - <p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>
* `create_export` - <p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>
* `create_intent` - <p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>
* `create_resource_policy` - Creates a new resource policy with the specified policy statements.
* `create_resource_policy_statement` - <p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>
* `create_slot` - Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user. 
* `create_slot_type` - <p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>
* `create_upload_url` - Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale. 
* `delete_bot` - <p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* `delete_bot_alias` - Deletes the specified bot alias.
* `delete_bot_locale` - <p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>
* `delete_bot_version` - Deletes a specific version of a bot. To delete all version of a bot, use the <a>DeleteBot</a> operation.
* `delete_export` - Removes a previous export and the associated files stored in an S3 bucket.
* `delete_import` - Removes a previous import and the associated file stored in an S3 bucket.
* `delete_intent` - <p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>
* `delete_resource_policy` - Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
* `delete_resource_policy_statement` - Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.
* `delete_slot` - Deletes the specified slot from an intent.
* `delete_slot_type` - <p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* `describe_bot` - Provides metadata information about a bot. 
* `describe_bot_alias` - Get information about a specific bot alias.
* `describe_bot_locale` - Describes the settings that a bot has for a specific locale. 
* `describe_bot_version` - Provides metadata about a version of a bot.
* `describe_export` - Gets information about a specific export.
* `describe_import` - Gets information about a specific import.
* `describe_intent` - Returns metadata about an intent.
* `describe_resource_policy` - Gets the resource policy and policy revision for a bot or bot alias.
* `describe_slot` - Gets metadata information about a slot.
* `describe_slot_type` - Gets metadata information about a slot type.
* `list_bot_aliases` - Gets a list of aliases for the specified bot.
* `list_bot_locales` - Gets a list of locales for the specified bot.
* `list_bot_versions` - <p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>
* `list_bots` - Gets a list of available bots.
* `list_built_in_intents` - <p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a>CreateIntent</a>.</p>
* `list_built_in_slot_types` - Gets a list of built-in slot types that meet the specified criteria.
* `list_exports` - Lists the exports for a bot or bot locale. Exports are kept in the list for 7 days.
* `list_imports` - Lists the imports for a bot or bot locale. Imports are kept in the list for 7 days.
* `list_intents` - Get a list of intents that meet the specified criteria.
* `list_slot_types` - Gets a list of slot types that match the specified criteria.
* `list_slots` - Gets a list of slots that match the specified criteria.
* `list_tags_for_resource` - Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
* `start_import` - Starts importing a bot or bot locale from a zip archive that you uploaded to an S3 bucket.
* `tag_resource` - Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
* `untag_resource` - Removes tags from a bot, bot alias, or bot channel.
* `update_bot` - Updates the configuration of an existing bot. 
* `update_bot_alias` - Updates the configuration of an existing bot alias.
* `update_bot_locale` - Updates the settings that a bot has for a specific locale.
* `update_export` - <p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the operation.</p>
* `update_intent` - Updates the settings for an intent.
* `update_resource_policy` - Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
* `update_slot` - Updates the settings for a slot.
* `update_slot_type` - Updates the configuration of an existing slot type.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
