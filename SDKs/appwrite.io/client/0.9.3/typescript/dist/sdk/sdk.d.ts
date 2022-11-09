import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](/docs/client/account#accountCreateVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](/docs/client/account#accountCreateSession).
    **/
    AccountCreate(req: operations.AccountCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateResponse>;
    /**
     * Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](/docs/client/account#accountUpdateEmail) or create an [OAuth2 session](/docs/client/account#accountCreateOAuth2Session).
    **/
    AccountCreateAnonymousSession(req: operations.AccountCreateAnonymousSessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateAnonymousSessionResponse>;
    /**
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.
    **/
    AccountCreateJwt(req: operations.AccountCreateJwtRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateJwtResponse>;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.
     *
     * If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user..
     *
    **/
    AccountCreateOAuth2Session(req: operations.AccountCreateOAuth2SessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateOAuth2SessionResponse>;
    /**
     * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
    **/
    AccountCreateRecovery(req: operations.AccountCreateRecoveryRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateRecoveryResponse>;
    /**
     * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
    **/
    AccountCreateSession(req: operations.AccountCreateSessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateSessionResponse>;
    /**
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
    **/
    AccountCreateVerification(req: operations.AccountCreateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.AccountCreateVerificationResponse>;
    /**
     * Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
    **/
    AccountDelete(req: operations.AccountDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteResponse>;
    /**
     * Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
    **/
    AccountDeleteSession(req: operations.AccountDeleteSessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteSessionResponse>;
    /**
     * Delete all sessions from the user account and remove any sessions cookies from the end client.
    **/
    AccountDeleteSessions(req: operations.AccountDeleteSessionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteSessionsResponse>;
    /**
     * Get currently logged in user data as JSON object.
    **/
    AccountGet(req: operations.AccountGetRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetResponse>;
    /**
     * Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
    **/
    AccountGetLogs(req: operations.AccountGetLogsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetLogsResponse>;
    /**
     * Get currently logged in user preferences as a key-value object.
    **/
    AccountGetPrefs(req: operations.AccountGetPrefsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetPrefsResponse>;
    /**
     * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
    **/
    AccountGetSession(req: operations.AccountGetSessionRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetSessionResponse>;
    /**
     * Get currently logged in user list of active sessions across different devices.
    **/
    AccountGetSessions(req: operations.AccountGetSessionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetSessionsResponse>;
    /**
     * Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
    **/
    AccountUpdateEmail(req: operations.AccountUpdateEmailRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateEmailResponse>;
    /**
     * Update currently logged in user account name.
    **/
    AccountUpdateName(req: operations.AccountUpdateNameRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateNameResponse>;
    /**
     * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
    **/
    AccountUpdatePassword(req: operations.AccountUpdatePasswordRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdatePasswordResponse>;
    /**
     * Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
    **/
    AccountUpdatePrefs(req: operations.AccountUpdatePrefsRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdatePrefsResponse>;
    /**
     * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
    **/
    AccountUpdateRecovery(req: operations.AccountUpdateRecoveryRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateRecoveryResponse>;
    /**
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
    **/
    AccountUpdateVerification(req: operations.AccountUpdateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.AccountUpdateVerificationResponse>;
    /**
     * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.
    **/
    AvatarsGetBrowser(req: operations.AvatarsGetBrowserRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetBrowserResponse>;
    /**
     * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
    **/
    AvatarsGetCreditCard(req: operations.AvatarsGetCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetCreditCardResponse>;
    /**
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
     *
    **/
    AvatarsGetFavicon(req: operations.AvatarsGetFaviconRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetFaviconResponse>;
    /**
     * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.
    **/
    AvatarsGetFlag(req: operations.AvatarsGetFlagRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetFlagResponse>;
    /**
     * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
    **/
    AvatarsGetImage(req: operations.AvatarsGetImageRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetImageResponse>;
    /**
     * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
     *
     * You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
    **/
    AvatarsGetInitials(req: operations.AvatarsGetInitialsRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetInitialsResponse>;
    /**
     * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
    **/
    AvatarsGetQr(req: operations.AvatarsGetQrRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetQrResponse>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.
    **/
    DatabaseCreateDocument(req: operations.DatabaseCreateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseCreateDocumentResponse>;
    /**
     * Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.
    **/
    DatabaseDeleteDocument(req: operations.DatabaseDeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseDeleteDocumentResponse>;
    /**
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
    **/
    DatabaseGetDocument(req: operations.DatabaseGetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseGetDocumentResponse>;
    /**
     * Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).
    **/
    DatabaseListDocuments(req: operations.DatabaseListDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseListDocumentsResponse>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
    **/
    DatabaseUpdateDocument(req: operations.DatabaseUpdateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseUpdateDocumentResponse>;
    /**
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
    **/
    FunctionsCreateExecution(req: operations.FunctionsCreateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateExecutionResponse>;
    /**
     * Get a function execution log by its unique ID.
    **/
    FunctionsGetExecution(req: operations.FunctionsGetExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsGetExecutionResponse>;
    /**
     * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
    **/
    FunctionsListExecutions(req: operations.FunctionsListExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsListExecutionsResponse>;
    /**
     * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
     *
     * ([IP Geolocation by DB-IP](https://db-ip.com))
    **/
    LocaleGet(req: operations.LocaleGetRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetResponse>;
    /**
     * List of all continents. You can use the locale header to get the data in a supported language.
    **/
    LocaleGetContinents(req: operations.LocaleGetContinentsRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetContinentsResponse>;
    /**
     * List of all countries. You can use the locale header to get the data in a supported language.
    **/
    LocaleGetCountries(req: operations.LocaleGetCountriesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesResponse>;
    /**
     * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
    **/
    LocaleGetCountriesEu(req: operations.LocaleGetCountriesEuRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesEuResponse>;
    /**
     * List of all countries phone codes. You can use the locale header to get the data in a supported language.
    **/
    LocaleGetCountriesPhones(req: operations.LocaleGetCountriesPhonesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesPhonesResponse>;
    /**
     * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
    **/
    LocaleGetCurrencies(req: operations.LocaleGetCurrenciesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetCurrenciesResponse>;
    /**
     * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
    **/
    LocaleGetLanguages(req: operations.LocaleGetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.LocaleGetLanguagesResponse>;
    /**
     * Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.
    **/
    StorageCreateFile(req: operations.StorageCreateFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageCreateFileResponse>;
    /**
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
    **/
    StorageDeleteFile(req: operations.StorageDeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageDeleteFileResponse>;
    /**
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
    **/
    StorageGetFile(req: operations.StorageGetFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFileResponse>;
    /**
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
    **/
    StorageGetFileDownload(req: operations.StorageGetFileDownloadRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFileDownloadResponse>;
    /**
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
    **/
    StorageGetFilePreview(req: operations.StorageGetFilePreviewRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFilePreviewResponse>;
    /**
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
    **/
    StorageGetFileView(req: operations.StorageGetFileViewRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFileViewResponse>;
    /**
     * Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).
    **/
    StorageListFiles(req: operations.StorageListFilesRequest, config?: AxiosRequestConfig): Promise<operations.StorageListFilesResponse>;
    /**
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
    **/
    StorageUpdateFile(req: operations.StorageUpdateFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageUpdateFileResponse>;
    /**
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.
    **/
    TeamsCreate(req: operations.TeamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateResponse>;
    /**
     * Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.
     *
     * Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.
     *
     * Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.
    **/
    TeamsCreateMembership(req: operations.TeamsCreateMembershipRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateMembershipResponse>;
    /**
     * Delete a team by its unique ID. Only team owners have write access for this resource.
    **/
    TeamsDelete(req: operations.TeamsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteResponse>;
    /**
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
    **/
    TeamsDeleteMembership(req: operations.TeamsDeleteMembershipRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteMembershipResponse>;
    /**
     * Get a team by its unique ID. All team members have read access for this resource.
    **/
    TeamsGet(req: operations.TeamsGetRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetResponse>;
    /**
     * Get a team members by the team unique ID. All team members have read access for this list of resources.
    **/
    TeamsGetMemberships(req: operations.TeamsGetMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipsResponse>;
    /**
     * Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).
    **/
    TeamsList(req: operations.TeamsListRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListResponse>;
    /**
     * Update a team by its unique ID. Only team owners have write access for this resource.
    **/
    TeamsUpdate(req: operations.TeamsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateResponse>;
    TeamsUpdateMembershipRoles(req: operations.TeamsUpdateMembershipRolesRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateMembershipRolesResponse>;
    /**
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.
    **/
    TeamsUpdateMembershipStatus(req: operations.TeamsUpdateMembershipStatusRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateMembershipStatusResponse>;
}
export {};
