import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://models-v2-lex.{region}.amazonaws.com", "https://models-v2-lex.{region}.amazonaws.com", "http://models-v2-lex.{region}.amazonaws.com.cn", "https://models-v2-lex.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * buildBotLocale - Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
    **/
    buildBotLocale(req: operations.BuildBotLocaleRequest, config?: AxiosRequestConfig): Promise<operations.BuildBotLocaleResponse>;
    /**
     * createBot - Creates an Amazon Lex conversational bot.
    **/
    createBot(req: operations.CreateBotRequest, config?: AxiosRequestConfig): Promise<operations.CreateBotResponse>;
    /**
     * createBotAlias - <p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>
    **/
    createBotAlias(req: operations.CreateBotAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateBotAliasResponse>;
    /**
     * createBotLocale - Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
    **/
    createBotLocale(req: operations.CreateBotLocaleRequest, config?: AxiosRequestConfig): Promise<operations.CreateBotLocaleResponse>;
    /**
     * createBotVersion - <p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>
    **/
    createBotVersion(req: operations.CreateBotVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateBotVersionResponse>;
    /**
     * createExport - <p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>
    **/
    createExport(req: operations.CreateExportRequest, config?: AxiosRequestConfig): Promise<operations.CreateExportResponse>;
    /**
     * createIntent - <p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>
    **/
    createIntent(req: operations.CreateIntentRequest, config?: AxiosRequestConfig): Promise<operations.CreateIntentResponse>;
    /**
     * createResourcePolicy - Creates a new resource policy with the specified policy statements.
    **/
    createResourcePolicy(req: operations.CreateResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourcePolicyResponse>;
    /**
     * createResourcePolicyStatement - <p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>
    **/
    createResourcePolicyStatement(req: operations.CreateResourcePolicyStatementRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourcePolicyStatementResponse>;
    /**
     * createSlot - Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.
    **/
    createSlot(req: operations.CreateSlotRequest, config?: AxiosRequestConfig): Promise<operations.CreateSlotResponse>;
    /**
     * createSlotType - <p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>
    **/
    createSlotType(req: operations.CreateSlotTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateSlotTypeResponse>;
    /**
     * createUploadUrl - Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.
    **/
    createUploadUrl(req: operations.CreateUploadUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateUploadUrlResponse>;
    /**
     * deleteBot - <p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
    **/
    deleteBot(req: operations.DeleteBotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBotResponse>;
    /**
     * deleteBotAlias - Deletes the specified bot alias.
    **/
    deleteBotAlias(req: operations.DeleteBotAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBotAliasResponse>;
    /**
     * deleteBotLocale - <p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>
    **/
    deleteBotLocale(req: operations.DeleteBotLocaleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBotLocaleResponse>;
    /**
     * deleteBotVersion - Deletes a specific version of a bot. To delete all version of a bot, use the <a>DeleteBot</a> operation.
    **/
    deleteBotVersion(req: operations.DeleteBotVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBotVersionResponse>;
    /**
     * deleteExport - Removes a previous export and the associated files stored in an S3 bucket.
    **/
    deleteExport(req: operations.DeleteExportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExportResponse>;
    /**
     * deleteImport - Removes a previous import and the associated file stored in an S3 bucket.
    **/
    deleteImport(req: operations.DeleteImportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImportResponse>;
    /**
     * deleteIntent - <p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>
    **/
    deleteIntent(req: operations.DeleteIntentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntentResponse>;
    /**
     * deleteResourcePolicy - Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
    **/
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * deleteResourcePolicyStatement - Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.
    **/
    deleteResourcePolicyStatement(req: operations.DeleteResourcePolicyStatementRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyStatementResponse>;
    /**
     * deleteSlot - Deletes the specified slot from an intent.
    **/
    deleteSlot(req: operations.DeleteSlotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSlotResponse>;
    /**
     * deleteSlotType - <p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
    **/
    deleteSlotType(req: operations.DeleteSlotTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSlotTypeResponse>;
    /**
     * describeBot - Provides metadata information about a bot.
    **/
    describeBot(req: operations.DescribeBotRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBotResponse>;
    /**
     * describeBotAlias - Get information about a specific bot alias.
    **/
    describeBotAlias(req: operations.DescribeBotAliasRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBotAliasResponse>;
    /**
     * describeBotLocale - Describes the settings that a bot has for a specific locale.
    **/
    describeBotLocale(req: operations.DescribeBotLocaleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBotLocaleResponse>;
    /**
     * describeBotVersion - Provides metadata about a version of a bot.
    **/
    describeBotVersion(req: operations.DescribeBotVersionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBotVersionResponse>;
    /**
     * describeExport - Gets information about a specific export.
    **/
    describeExport(req: operations.DescribeExportRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExportResponse>;
    /**
     * describeImport - Gets information about a specific import.
    **/
    describeImport(req: operations.DescribeImportRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImportResponse>;
    /**
     * describeIntent - Returns metadata about an intent.
    **/
    describeIntent(req: operations.DescribeIntentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIntentResponse>;
    /**
     * describeResourcePolicy - Gets the resource policy and policy revision for a bot or bot alias.
    **/
    describeResourcePolicy(req: operations.DescribeResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourcePolicyResponse>;
    /**
     * describeSlot - Gets metadata information about a slot.
    **/
    describeSlot(req: operations.DescribeSlotRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSlotResponse>;
    /**
     * describeSlotType - Gets metadata information about a slot type.
    **/
    describeSlotType(req: operations.DescribeSlotTypeRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSlotTypeResponse>;
    /**
     * listBotAliases - Gets a list of aliases for the specified bot.
    **/
    listBotAliases(req: operations.ListBotAliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListBotAliasesResponse>;
    /**
     * listBotLocales - Gets a list of locales for the specified bot.
    **/
    listBotLocales(req: operations.ListBotLocalesRequest, config?: AxiosRequestConfig): Promise<operations.ListBotLocalesResponse>;
    /**
     * listBotVersions - <p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>
    **/
    listBotVersions(req: operations.ListBotVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListBotVersionsResponse>;
    /**
     * listBots - Gets a list of available bots.
    **/
    listBots(req: operations.ListBotsRequest, config?: AxiosRequestConfig): Promise<operations.ListBotsResponse>;
    /**
     * listBuiltInIntents - <p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a>CreateIntent</a>.</p>
    **/
    listBuiltInIntents(req: operations.ListBuiltInIntentsRequest, config?: AxiosRequestConfig): Promise<operations.ListBuiltInIntentsResponse>;
    /**
     * listBuiltInSlotTypes - Gets a list of built-in slot types that meet the specified criteria.
    **/
    listBuiltInSlotTypes(req: operations.ListBuiltInSlotTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListBuiltInSlotTypesResponse>;
    /**
     * listExports - Lists the exports for a bot or bot locale. Exports are kept in the list for 7 days.
    **/
    listExports(req: operations.ListExportsRequest, config?: AxiosRequestConfig): Promise<operations.ListExportsResponse>;
    /**
     * listImports - Lists the imports for a bot or bot locale. Imports are kept in the list for 7 days.
    **/
    listImports(req: operations.ListImportsRequest, config?: AxiosRequestConfig): Promise<operations.ListImportsResponse>;
    /**
     * listIntents - Get a list of intents that meet the specified criteria.
    **/
    listIntents(req: operations.ListIntentsRequest, config?: AxiosRequestConfig): Promise<operations.ListIntentsResponse>;
    /**
     * listSlotTypes - Gets a list of slot types that match the specified criteria.
    **/
    listSlotTypes(req: operations.ListSlotTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListSlotTypesResponse>;
    /**
     * listSlots - Gets a list of slots that match the specified criteria.
    **/
    listSlots(req: operations.ListSlotsRequest, config?: AxiosRequestConfig): Promise<operations.ListSlotsResponse>;
    /**
     * listTagsForResource - Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startImport - Starts importing a bot or bot locale from a zip archive that you uploaded to an S3 bucket.
    **/
    startImport(req: operations.StartImportRequest, config?: AxiosRequestConfig): Promise<operations.StartImportResponse>;
    /**
     * tagResource - Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from a bot, bot alias, or bot channel.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateBot - Updates the configuration of an existing bot.
    **/
    updateBot(req: operations.UpdateBotRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBotResponse>;
    /**
     * updateBotAlias - Updates the configuration of an existing bot alias.
    **/
    updateBotAlias(req: operations.UpdateBotAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBotAliasResponse>;
    /**
     * updateBotLocale - Updates the settings that a bot has for a specific locale.
    **/
    updateBotLocale(req: operations.UpdateBotLocaleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBotLocaleResponse>;
    /**
     * updateExport - <p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the operation.</p>
    **/
    updateExport(req: operations.UpdateExportRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExportResponse>;
    /**
     * updateIntent - Updates the settings for an intent.
    **/
    updateIntent(req: operations.UpdateIntentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntentResponse>;
    /**
     * updateResourcePolicy - Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
    **/
    updateResourcePolicy(req: operations.UpdateResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourcePolicyResponse>;
    /**
     * updateSlot - Updates the settings for a slot.
    **/
    updateSlot(req: operations.UpdateSlotRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSlotResponse>;
    /**
     * updateSlotType - Updates the configuration of an existing slot type.
    **/
    updateSlotType(req: operations.UpdateSlotTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSlotTypeResponse>;
}
export {};
