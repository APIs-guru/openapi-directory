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
import { BuildBotLocaleRequest, BuildBotLocaleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BuildBotLocaleRequest = {
  pathParams: {
    botId: "ea",
    botVersion: "voluptate",
    localeId: "et",
  },
  headers: {
    xAmzAlgorithm: "consequatur",
    xAmzContentSha256: "aliquam",
    xAmzCredential: "molestiae",
    xAmzDate: "repellat",
    xAmzSecurityToken: "ut",
    xAmzSignature: "necessitatibus",
    xAmzSignedHeaders: "deserunt",
  },
};

sdk.sdk.buildBotLocale(req).then((res: BuildBotLocaleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `buildBotLocale` - Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
* `createBot` - Creates an Amazon Lex conversational bot. 
* `createBotAlias` - <p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>
* `createBotLocale` - Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
* `createBotVersion` - <p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>
* `createExport` - <p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>
* `createIntent` - <p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>
* `createResourcePolicy` - Creates a new resource policy with the specified policy statements.
* `createResourcePolicyStatement` - <p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>
* `createSlot` - Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user. 
* `createSlotType` - <p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>
* `createUploadUrl` - Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale. 
* `deleteBot` - <p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* `deleteBotAlias` - Deletes the specified bot alias.
* `deleteBotLocale` - <p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>
* `deleteBotVersion` - Deletes a specific version of a bot. To delete all version of a bot, use the <a>DeleteBot</a> operation.
* `deleteExport` - Removes a previous export and the associated files stored in an S3 bucket.
* `deleteImport` - Removes a previous import and the associated file stored in an S3 bucket.
* `deleteIntent` - <p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>
* `deleteResourcePolicy` - Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
* `deleteResourcePolicyStatement` - Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.
* `deleteSlot` - Deletes the specified slot from an intent.
* `deleteSlotType` - <p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* `describeBot` - Provides metadata information about a bot. 
* `describeBotAlias` - Get information about a specific bot alias.
* `describeBotLocale` - Describes the settings that a bot has for a specific locale. 
* `describeBotVersion` - Provides metadata about a version of a bot.
* `describeExport` - Gets information about a specific export.
* `describeImport` - Gets information about a specific import.
* `describeIntent` - Returns metadata about an intent.
* `describeResourcePolicy` - Gets the resource policy and policy revision for a bot or bot alias.
* `describeSlot` - Gets metadata information about a slot.
* `describeSlotType` - Gets metadata information about a slot type.
* `listBotAliases` - Gets a list of aliases for the specified bot.
* `listBotLocales` - Gets a list of locales for the specified bot.
* `listBotVersions` - <p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>
* `listBots` - Gets a list of available bots.
* `listBuiltInIntents` - <p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a>CreateIntent</a>.</p>
* `listBuiltInSlotTypes` - Gets a list of built-in slot types that meet the specified criteria.
* `listExports` - Lists the exports for a bot or bot locale. Exports are kept in the list for 7 days.
* `listImports` - Lists the imports for a bot or bot locale. Imports are kept in the list for 7 days.
* `listIntents` - Get a list of intents that meet the specified criteria.
* `listSlotTypes` - Gets a list of slot types that match the specified criteria.
* `listSlots` - Gets a list of slots that match the specified criteria.
* `listTagsForResource` - Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
* `startImport` - Starts importing a bot or bot locale from a zip archive that you uploaded to an S3 bucket.
* `tagResource` - Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
* `untagResource` - Removes tags from a bot, bot alias, or bot channel.
* `updateBot` - Updates the configuration of an existing bot. 
* `updateBotAlias` - Updates the configuration of an existing bot alias.
* `updateBotLocale` - Updates the settings that a bot has for a specific locale.
* `updateExport` - <p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the operation.</p>
* `updateIntent` - Updates the settings for an intent.
* `updateResourcePolicy` - Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
* `updateSlot` - Updates the settings for a slot.
* `updateSlotType` - Updates the configuration of an existing slot type.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
