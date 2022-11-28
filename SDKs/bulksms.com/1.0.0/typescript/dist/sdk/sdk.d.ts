import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.bulksms.com/v1"];
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
     * deleteWebhooksId - Delete a webhook
    **/
    deleteWebhooksId(req: operations.DeleteWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdResponse>;
    /**
     * getBlockedNumbers - List blocked numbers
    **/
    getBlockedNumbers(req: operations.GetBlockedNumbersRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockedNumbersResponse>;
    /**
     * getMessages - Retrieve Messages
     *
     * Retrieve the messages you have sent or received.
     *
     * All the parameters are optional.  If a value is not supplied for `filter`, the messages are not filtered.
     *
     * Messages can be filtered by supplying query clauses in the `filter` parameter. Each clause has the form `name=value` where `name` is the name of a filter field and `value` is a valid value for that field.  A value for a field is optional. Include a clause for a field in the filter only when there is a need to fetch messages that match some value for that field.
     * For a numeric filter field, you can also use the less than operator (`<`).
     *
     * If present, the filter value must have at least one clause, but it can contain a combination of clauses. Multiple clauses are separated with the `&` symbol.  Semantically, multiple clauses form a [logical conjunction](https://en.wikipedia.org/wiki/Logical_conjunction).
     *
     * For example, if you want to list all messages that were sent as part of a particular submission, your filter contains two clauses and will look something like this
     * ```
     * type%3DSENT&submission.id%3D1-00000000000522347562
     * ```
     * Because `filter` is a request parameter, it is important to note that the value for this parameter must be *URL encoded*. In particular, the `=` encodes to `%3D` and the `&` encodes to `%26`.  Note that you do not have to encode the `<` character.
     *
     * Using the previous example to illustrate; after encoding and encasing it, the clauses are transformed into a request that looks like this
     * ```
     * GET /v1/messages?filter=type%3DSENT%26submission.id%3D1-00000000000522347562
     * ```
     * If the field name or the field value of a clause is not valid, a [bad_request error](errors#bad-request) is returned instead of the usual result.  The `detail` field of this error provides more information about the problem.
     *
     * The table below lists the fields available for filtering
     *
     * | Field | Type   | Values | Note and example |
     * |-------|------|--------------------|------|
     * | id            | Integer  | Positive integer  | Use the `id` field with `<` (or with `>`) to fetch messages that are older (or newer) than those that are already fetched. <br/>`filter=id<123456` |
     * | type          | String  | SENT, RECEIVED  | SENT are Mobile Terminating (MT) SMSs; RECEIVED are Mobile Originating (MO) SMSs.<br/>`filter=type%3DSENT` |
     * | submission.id | String  |  | `filter=submission.id%3D1-00000000000522347562` |
     * | status.type   | String  | ACCEPTED, SCHEDULED, SENT, DELIVERED, FAILED  | See the message `status.type` field for more information. <br/>`filter=status.type%3DDELIVERED` |
     * | status.id| String  |  | See the message `status.id` field for more information. `filter=status.id%3DFAILED.EXPIRED`|
     * | submission.date | String | Formatted Date | A fully specified date (e.g. 2017-01-01T10:00:00+01:00).  Use this field with `<=`, `<`, `>` or `>=` to limit the values. <br/>`filter=submission.date%3E%3D2017-01-01T10%3A00%3A00%2B01%3A00` |
     * | userSuppliedId  | String | | Use a string value you specified in the `userSuppliedId` property when you sent the message. Only `SENT` messages will be retrieved. <br/>`filter=userSuppliedId%3Dacc009876` |
     *
    **/
    getMessages(req: operations.GetMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesResponse>;
    /**
     * getMessagesId - Show Message
     *
     * Get a the message by `id`.
     * ```http
     * GET /v1/messages/4023457654
     * ```
     *
    **/
    getMessagesId(req: operations.GetMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesIdResponse>;
    /**
     * getMessagesIdRelatedReceivedMessages - List Related Messages
     *
     * Get the messages related to a sent message identified by `id`.
     *
     * For more information how this work, see the `relatedSentMessageId` field in the message.
     *
    **/
    getMessagesIdRelatedReceivedMessages(req: operations.GetMessagesIdRelatedReceivedMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesIdRelatedReceivedMessagesResponse>;
    /**
     * getMessagesSend - Send message by simple GET or POST
     *
     * A really simple interface for people who require a GET mechanism to submit a single message.
     *
     * The URI is interpreted as UTF-8. HTTP Basic Auth is used for authentication.
     *
     * __Note__ BulkSMS recommends that you use the more flexible Send Messages Operation when submitting SMS messages from your application.
     *
     * Here is an example of a GET
     * ```http
     * GET /v1/messages/send?to=%2b270000000&body=Hello%20World
     * ```
     *
     * You can also use the same parameters to POST form encoded fields to `/messages`.
     * Here is an example of a POST
     * ```http
     * POST /v1/messages
     * Content-Type: application/x-www-form-urlencoded
     *
     * to=%2b27000000000&body=Hello+World
     * ```
     *
    **/
    getMessagesSend(req: operations.GetMessagesSendRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesSendResponse>;
    /**
     * getProfile - Get profile
     *
     * Returns information about your user profile
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getWebhooks - List webhooks
     *
     * Contains a list of your webhooks
    **/
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * getWebhooksId - Read a webhook
    **/
    getWebhooksId(req: operations.GetWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdResponse>;
    /**
     * postBlockedNumbers - Create a blocked number
     *
     * Blocked numbers are phone numbers to which your account is not permitted to send messages.
     * The numbers can be created via this API, by a recipient replying with a STOP message to one
     * of your previous SENT messages, or by a BulkSMS administrator.
     *
     * Sending a message to a blocked number will result in the message being assigned a status of
     * `FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.
     *
    **/
    postBlockedNumbers(req: operations.PostBlockedNumbersRequest, config?: AxiosRequestConfig): Promise<operations.PostBlockedNumbersResponse>;
    /**
     * postMessages - Send Messages
     *
     * Send messages to one or more recipients.
     *
     * You can post up to `30 000` messages in a batch.
     * But note that the `deduplication-id` is set per submission, so it is recommended that you use a smaller number, like `4000` per submission in order to make resubmissions on network failures more practical.
     *
     * #### Repliability
     *
     * When a sent message is _repliable_,  the BulkSMS system can process an SMS response sent by your recipient.
     *
     * The message sent by your customer is called a mobile originating (MO) message and would be available under `RECEIVED` messages.
     * You can obtain a list of MOs using the [retrieve messages API call](#tag/Message%2Fpaths%2F~1messages%2Fget).
     * In addition you can also get a list of the MOs that are associated with a specific sent message (see the [list related messages API call](#tag/Message%2Fpaths%2F~1messages~1%7Bid%7D~1relatedReceivedMessages%2Fget)).
     *
     * If you use a specific _sender id_ in the `from` property of the send message, the message will not be repliable.
     * If you want a message to be repliable, you need to specify `REPLIABLE` in the `from.type` property.
     *
     * If you do not set the `from` property, your account settings are considered to determine whether or not the message is repliable.
     * If the _default repliable_ setting on your account is _yes_ then the message will be repliable.
     * If this setting is _no_, the message will not be repliable.
     *
     *
     * #### Body templates
     *
     * When sending a message you can use template fields to customise the message text.
     *
     * *Field based templates* allow you to create a message with place-holders for custom fields.  Fields are identified by a zero based index; the first field is `F0`, the second is `F1` and so on.
     *
     * For example, let's say you want to send a daily SMS message to all your clients that tell them what their current balance is.  The `body` of the message could look something like this
     *
     * ```
     * Good morning {F0######}, your balance is {F1######}
     * ```
     *
     * In this message, the first field, `F0`, is the name  of the customer and he second field `F1` is the balance for that customer.  The `#` used to specify the maximum length  of the field.  Note that the maximum length allowed for the value includes the space taken by the braces, template name and hash symbol.  For example, the value `{F0#}` specifies a maximum length of `5`.  If the data is longer than this length, the data will be truncated when the message body is constructed.
     *
     * The data fields are provided in the property named `fields` in the `to` element.  Here is a complete example of how this might look
     *
     * ```
     * {
     *   "body": "Good morning {F0######}, your balance is {F1######}",
     *   "to":  [
     *       {"address": "27456789","fields": ["Harry", "$1345.23"] },
     *       {"address": "27456785","fields": ["Sally", "$2345.58"] }
     *   ]
     * }
     * ```
     *
     * If you are sending to contacts (or to groups) in your phonebook, you can use the *Phonebook based templates*.  These are similar to the templates described above, but they have specific names. The template for the contact's first name is identified by `fn` and the template for the contact's surname is identified by `sn`.  Below in an example that will work if the numbers are registered in your phonebook.
     *
     * ```
     * {
     *   "body": "Hi {fn######} {sn######}, have a great day!",
     *   "to":  [
     *       {"address": "27456789" },
     *       {"address": "27456785" }
     *   ]
     * }
     * ```
     *
    **/
    postMessages(req: operations.PostMessagesRequest, config?: AxiosRequestConfig): Promise<operations.PostMessagesResponse>;
    /**
     * postRmmPreSignAttachment - Upload an attachment via a signed URL
     *
     * You can send any URL as part of your SMS text.  When the recipient taps on the URL, the file to which the URL points will be downloaded and opened on the mobile device.  This handy feature is supported by most modern mobile devices.
     *
     * The best way to send an attachment is to store the file on a web server you own and use that URL in the SMS text.  Your customer will then see a URL that she will recognise as belonging to you.  This is the most flexible and the simplest solution.
     *
     * However, if it is not possible to use your web server, you can use BulkSMS storage to keep the files that you want to attach to your SMS message.  Please note that these files will be deleted after 30 days.
     *
     * The process to use the BulkSMS storage requires you to take three steps:
     *
     * **Step 1**: Use your BulkSMS credentials (or your API Token) to request a pre-signed URL.  This is what this `pre-sign-attachment` method is for.  It returns a PreSignInfo object that you will use in the other two steps.
     *
     * **Step 2**: Upload the file using a standard HTTP `PUT` request. For your `PUT` request, use the value of `putURL` from the PreSignInfo object as the request address.  You also have to add the entries from the `fields` property (of the PreSignInfo object) to the headers of your 'PUT' request. You send the file content as the body of the `PUT` request.
     *
     * **Step 3**: Now you can use the value of `fetchURL` from the PreSignInfo object in the body of your SMS messages and send those using the usual messaging API (described elsewhere in this document).  If you send the same file to many recipients, it is safe to use the same URL for all of them.
     *
     * If you need to, take a closer look at the example program (on the right-hand side) to get a better idea of how to implement this process.
     *
    **/
    postRmmPreSignAttachment(req: operations.PostRmmPreSignAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.PostRmmPreSignAttachmentResponse>;
    /**
     * postWebhooks - Create a webhook
     *
     * A webhook is an URL that you can register when you want the BulkSMS system to notify you about your messages.
     * You can register multiple webhooks, and each one will be called.  (Note: you can also use our [Web App](https://www.bulksms.com/account/#!/advanced-settings/webhooks) to manage your webhooks interactively.)
     * If you want to be notified of `SENT` messages and `RECEIVED` messages you need to create two webhooks.
     *
     * ### Implementing your webhook
     *
     * Code samples of Webhook implementations:
     * * [PHP](samples/webhook-php.html)
     *
     * When you implement your webhook, there are a few rules to be aware of:
     * - Your webhook must process `POST` requests that contains an array of messages in the post body.  This input given to your webhook has the same structure as the output produced when you call [Retrieve Messages](#tag/Message%2Fpaths%2F~1messages%2Fget).
     * - When you register or update your webhook, the URL will be tested by invoking it with an empty array (`[]`).
     * - It is possible for your webhook to receive multiple updates for the same message and status. It happens from time to time that the mobile network duplicates status updates.
     * - The order by which the webhook is invoked can be unexpected.  For example, if sender A replies before sender B, your webhook might get the reply from B first.
     * - The webhook is expected to comply with good practices with regard to the status code it responds with.
     *   - A status code in the `1xx` and `2xx` range is taken as an acknowledgement that the invocation was received and that the webhook host is ready to receive another.
     *   - A status code in the `4xx` range is taken as a permanent problem and indicates that the webhook cannot process the message. The specific message that caused the error will be discarded, but your webhook will be invoked again when another message becomes available.
     *   - Any other status code will be taken as a temporary problem; and indicates that the BulkSMS system should retry. The specific message that caused the error will not be discarded and your webhook will be invoked again with this message (see the subsequent section for more details on retry processing).
     * - Your webhook has to respond within `30` seconds.  If no response is given in this time, the invocation will be retried.
     * - It is good idea to add a secret to your URL in order to make it more secure. Here is an example:
     * `https://www.example.com/hook.php?secret=pass763265word`
     * - You can use a non-standard port if necessary, for example: `https://www.example.com:8321/hook.php?secret=pass763265word`
     *
     *
     * ### The retry process
     *
     * The process the BulkSMS systems follow to handle retries is roughly the following:
     * - The first retry is scheduled for 90 seconds into the future.
     * - After the first retry, subsequent failures will have longer delays, following this sequence - 3 minutes, 6 minutes, 12 minutes thereafter the message will be retried every 15 minutes for a 2 day period.
     * - When all retries fail, the message will be discarded.
     *
     * ### Problem reports via email
     *
     * Your are strongly advised to provide an email address when you register your webhook.
     * An notice will be sent to this email address to keep you in the loop whenever there are problems with your webhook.
     * In order to prevent your inbox from being flooded, the system sends a notice about an observed error no more than once in a 24 hour period.
     *
     * The following emails can be expected
     *  - A __message retrying__ email is sent after an invocation has failed with a retry-able error.  This email is an early warning, allowing you to investigate your systems.
     *  - A __message discarded__ email is sent after failure email is send when a message is discarded as a consequence of a non-retry-able error.
     *
    **/
    postWebhooks(req: operations.PostWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksResponse>;
    /**
     * postWebhooksId - Update a webhook
    **/
    postWebhooksId(req: operations.PostWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksIdResponse>;
}
export {};
