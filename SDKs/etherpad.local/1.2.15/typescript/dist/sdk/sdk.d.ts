import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://etherpad.local", "http://pads.mro.name/api/1.2.15"];
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
     * appendChatMessageUsingGet - appends a chat message
    **/
    appendChatMessageUsingGet(req: operations.AppendChatMessageUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.AppendChatMessageUsingGetResponse>;
    /**
     * appendChatMessageUsingPost - appends a chat message
    **/
    appendChatMessageUsingPost(req: operations.AppendChatMessageUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.AppendChatMessageUsingPostResponse>;
    appendTextUsingGet(req: operations.AppendTextUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.AppendTextUsingGetResponse>;
    appendTextUsingPost(req: operations.AppendTextUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.AppendTextUsingPostResponse>;
    /**
     * checkTokenUsingGet - returns ok when the current api token is valid
    **/
    checkTokenUsingGet(config?: AxiosRequestConfig): Promise<operations.CheckTokenUsingGetResponse>;
    /**
     * checkTokenUsingPost - returns ok when the current api token is valid
    **/
    checkTokenUsingPost(config?: AxiosRequestConfig): Promise<operations.CheckTokenUsingPostResponse>;
    copyPadUsingGet(req: operations.CopyPadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadUsingGetResponse>;
    copyPadUsingPost(req: operations.CopyPadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadUsingPostResponse>;
    copyPadWithoutHistoryUsingGet(req: operations.CopyPadWithoutHistoryUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadWithoutHistoryUsingGetResponse>;
    copyPadWithoutHistoryUsingPost(req: operations.CopyPadWithoutHistoryUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadWithoutHistoryUsingPostResponse>;
    /**
     * createAuthorIfNotExistsForUsingGet - this functions helps you to map your application author ids to Etherpad author ids
    **/
    createAuthorIfNotExistsForUsingGet(req: operations.CreateAuthorIfNotExistsForUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorIfNotExistsForUsingGetResponse>;
    /**
     * createAuthorIfNotExistsForUsingPost - this functions helps you to map your application author ids to Etherpad author ids
    **/
    createAuthorIfNotExistsForUsingPost(req: operations.CreateAuthorIfNotExistsForUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorIfNotExistsForUsingPostResponse>;
    /**
     * createAuthorUsingGet - creates a new author
    **/
    createAuthorUsingGet(req: operations.CreateAuthorUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorUsingGetResponse>;
    /**
     * createAuthorUsingPost - creates a new author
    **/
    createAuthorUsingPost(req: operations.CreateAuthorUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorUsingPostResponse>;
    createDiffHtmlUsingGet(req: operations.CreateDiffHtmlUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiffHtmlUsingGetResponse>;
    createDiffHtmlUsingPost(req: operations.CreateDiffHtmlUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiffHtmlUsingPostResponse>;
    /**
     * createGroupIfNotExistsForUsingGet - this functions helps you to map your application group ids to Etherpad group ids
    **/
    createGroupIfNotExistsForUsingGet(req: operations.CreateGroupIfNotExistsForUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupIfNotExistsForUsingGetResponse>;
    /**
     * createGroupIfNotExistsForUsingPost - this functions helps you to map your application group ids to Etherpad group ids
    **/
    createGroupIfNotExistsForUsingPost(req: operations.CreateGroupIfNotExistsForUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupIfNotExistsForUsingPostResponse>;
    /**
     * createGroupPadUsingGet - creates a new pad in this group
    **/
    createGroupPadUsingGet(req: operations.CreateGroupPadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupPadUsingGetResponse>;
    /**
     * createGroupPadUsingPost - creates a new pad in this group
    **/
    createGroupPadUsingPost(req: operations.CreateGroupPadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupPadUsingPostResponse>;
    /**
     * createGroupUsingGet - creates a new group
    **/
    createGroupUsingGet(config?: AxiosRequestConfig): Promise<operations.CreateGroupUsingGetResponse>;
    /**
     * createGroupUsingPost - creates a new group
    **/
    createGroupUsingPost(config?: AxiosRequestConfig): Promise<operations.CreateGroupUsingPostResponse>;
    /**
     * createPadUsingGet - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
    **/
    createPadUsingGet(req: operations.CreatePadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreatePadUsingGetResponse>;
    /**
     * createPadUsingPost - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
    **/
    createPadUsingPost(req: operations.CreatePadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreatePadUsingPostResponse>;
    /**
     * createSessionUsingGet - creates a new session. validUntil is an unix timestamp in seconds
    **/
    createSessionUsingGet(req: operations.CreateSessionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionUsingGetResponse>;
    /**
     * createSessionUsingPost - creates a new session. validUntil is an unix timestamp in seconds
    **/
    createSessionUsingPost(req: operations.CreateSessionUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateSessionUsingPostResponse>;
    /**
     * deleteGroupUsingGet - deletes a group
    **/
    deleteGroupUsingGet(req: operations.DeleteGroupUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsingGetResponse>;
    /**
     * deleteGroupUsingPost - deletes a group
    **/
    deleteGroupUsingPost(req: operations.DeleteGroupUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsingPostResponse>;
    /**
     * deletePadUsingGet - deletes a pad
    **/
    deletePadUsingGet(req: operations.DeletePadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.DeletePadUsingGetResponse>;
    /**
     * deletePadUsingPost - deletes a pad
    **/
    deletePadUsingPost(req: operations.DeletePadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.DeletePadUsingPostResponse>;
    /**
     * deleteSessionUsingGet - deletes a session
    **/
    deleteSessionUsingGet(req: operations.DeleteSessionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionUsingGetResponse>;
    /**
     * deleteSessionUsingPost - deletes a session
    **/
    deleteSessionUsingPost(req: operations.DeleteSessionUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionUsingPostResponse>;
    getAttributePoolUsingGet(req: operations.GetAttributePoolUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributePoolUsingGetResponse>;
    getAttributePoolUsingPost(req: operations.GetAttributePoolUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributePoolUsingPostResponse>;
    /**
     * getAuthorNameUsingGet - Returns the Author Name of the author
    **/
    getAuthorNameUsingGet(req: operations.GetAuthorNameUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorNameUsingGetResponse>;
    /**
     * getAuthorNameUsingPost - Returns the Author Name of the author
    **/
    getAuthorNameUsingPost(req: operations.GetAuthorNameUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorNameUsingPostResponse>;
    /**
     * getChatHeadUsingGet - returns the chatHead (chat-message) of the pad
    **/
    getChatHeadUsingGet(req: operations.GetChatHeadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHeadUsingGetResponse>;
    /**
     * getChatHeadUsingPost - returns the chatHead (chat-message) of the pad
    **/
    getChatHeadUsingPost(req: operations.GetChatHeadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHeadUsingPostResponse>;
    /**
     * getChatHistoryUsingGet - returns the chat history
    **/
    getChatHistoryUsingGet(req: operations.GetChatHistoryUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHistoryUsingGetResponse>;
    /**
     * getChatHistoryUsingPost - returns the chat history
    **/
    getChatHistoryUsingPost(req: operations.GetChatHistoryUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHistoryUsingPostResponse>;
    /**
     * getHtmlUsingGet - returns the text of a pad formatted as HTML
    **/
    getHtmlUsingGet(req: operations.GetHtmlUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetHtmlUsingGetResponse>;
    /**
     * getHtmlUsingPost - returns the text of a pad formatted as HTML
    **/
    getHtmlUsingPost(req: operations.GetHtmlUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetHtmlUsingPostResponse>;
    /**
     * getLastEditedUsingGet - returns the timestamp of the last revision of the pad
    **/
    getLastEditedUsingGet(req: operations.GetLastEditedUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetLastEditedUsingGetResponse>;
    /**
     * getLastEditedUsingPost - returns the timestamp of the last revision of the pad
    **/
    getLastEditedUsingPost(req: operations.GetLastEditedUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetLastEditedUsingPostResponse>;
    getPadIdUsingGet(req: operations.GetPadIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPadIdUsingGetResponse>;
    getPadIdUsingPost(req: operations.GetPadIdUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetPadIdUsingPostResponse>;
    /**
     * getPublicStatusUsingGet - return true of false
    **/
    getPublicStatusUsingGet(req: operations.GetPublicStatusUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicStatusUsingGetResponse>;
    /**
     * getPublicStatusUsingPost - return true of false
    **/
    getPublicStatusUsingPost(req: operations.GetPublicStatusUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicStatusUsingPostResponse>;
    /**
     * getReadOnlyIdUsingGet - returns the read only link of a pad
    **/
    getReadOnlyIdUsingGet(req: operations.GetReadOnlyIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetReadOnlyIdUsingGetResponse>;
    /**
     * getReadOnlyIdUsingPost - returns the read only link of a pad
    **/
    getReadOnlyIdUsingPost(req: operations.GetReadOnlyIdUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetReadOnlyIdUsingPostResponse>;
    getRevisionChangesetUsingGet(req: operations.GetRevisionChangesetUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionChangesetUsingGetResponse>;
    getRevisionChangesetUsingPost(req: operations.GetRevisionChangesetUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionChangesetUsingPostResponse>;
    /**
     * getRevisionsCountUsingGet - returns the number of revisions of this pad
    **/
    getRevisionsCountUsingGet(req: operations.GetRevisionsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionsCountUsingGetResponse>;
    /**
     * getRevisionsCountUsingPost - returns the number of revisions of this pad
    **/
    getRevisionsCountUsingPost(req: operations.GetRevisionsCountUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionsCountUsingPostResponse>;
    getSavedRevisionsCountUsingGet(req: operations.GetSavedRevisionsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedRevisionsCountUsingGetResponse>;
    getSavedRevisionsCountUsingPost(req: operations.GetSavedRevisionsCountUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedRevisionsCountUsingPostResponse>;
    /**
     * getSessionInfoUsingGet - returns informations about a session
    **/
    getSessionInfoUsingGet(req: operations.GetSessionInfoUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionInfoUsingGetResponse>;
    /**
     * getSessionInfoUsingPost - returns informations about a session
    **/
    getSessionInfoUsingPost(req: operations.GetSessionInfoUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionInfoUsingPostResponse>;
    getStatsUsingGet(config?: AxiosRequestConfig): Promise<operations.GetStatsUsingGetResponse>;
    getStatsUsingPost(config?: AxiosRequestConfig): Promise<operations.GetStatsUsingPostResponse>;
    /**
     * getTextUsingGet - returns the text of a pad
    **/
    getTextUsingGet(req: operations.GetTextUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTextUsingGetResponse>;
    /**
     * getTextUsingPost - returns the text of a pad
    **/
    getTextUsingPost(req: operations.GetTextUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetTextUsingPostResponse>;
    listAllGroupsUsingGet(config?: AxiosRequestConfig): Promise<operations.ListAllGroupsUsingGetResponse>;
    listAllGroupsUsingPost(config?: AxiosRequestConfig): Promise<operations.ListAllGroupsUsingPostResponse>;
    /**
     * listAllPadsUsingGet - list all the pads
    **/
    listAllPadsUsingGet(config?: AxiosRequestConfig): Promise<operations.ListAllPadsUsingGetResponse>;
    /**
     * listAllPadsUsingPost - list all the pads
    **/
    listAllPadsUsingPost(config?: AxiosRequestConfig): Promise<operations.ListAllPadsUsingPostResponse>;
    /**
     * listAuthorsOfPadUsingGet - returns an array of authors who contributed to this pad
    **/
    listAuthorsOfPadUsingGet(req: operations.ListAuthorsOfPadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorsOfPadUsingGetResponse>;
    /**
     * listAuthorsOfPadUsingPost - returns an array of authors who contributed to this pad
    **/
    listAuthorsOfPadUsingPost(req: operations.ListAuthorsOfPadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorsOfPadUsingPostResponse>;
    /**
     * listPadsOfAuthorUsingGet - returns an array of all pads this author contributed to
    **/
    listPadsOfAuthorUsingGet(req: operations.ListPadsOfAuthorUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsOfAuthorUsingGetResponse>;
    /**
     * listPadsOfAuthorUsingPost - returns an array of all pads this author contributed to
    **/
    listPadsOfAuthorUsingPost(req: operations.ListPadsOfAuthorUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsOfAuthorUsingPostResponse>;
    /**
     * listPadsUsingGet - returns all pads of this group
    **/
    listPadsUsingGet(req: operations.ListPadsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsUsingGetResponse>;
    /**
     * listPadsUsingPost - returns all pads of this group
    **/
    listPadsUsingPost(req: operations.ListPadsUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsUsingPostResponse>;
    listSavedRevisionsUsingGet(req: operations.ListSavedRevisionsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListSavedRevisionsUsingGetResponse>;
    listSavedRevisionsUsingPost(req: operations.ListSavedRevisionsUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListSavedRevisionsUsingPostResponse>;
    /**
     * listSessionsOfAuthorUsingGet - returns all sessions of an author
    **/
    listSessionsOfAuthorUsingGet(req: operations.ListSessionsOfAuthorUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfAuthorUsingGetResponse>;
    /**
     * listSessionsOfAuthorUsingPost - returns all sessions of an author
    **/
    listSessionsOfAuthorUsingPost(req: operations.ListSessionsOfAuthorUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfAuthorUsingPostResponse>;
    listSessionsOfGroupUsingGet(req: operations.ListSessionsOfGroupUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfGroupUsingGetResponse>;
    listSessionsOfGroupUsingPost(req: operations.ListSessionsOfGroupUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfGroupUsingPostResponse>;
    movePadUsingGet(req: operations.MovePadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.MovePadUsingGetResponse>;
    movePadUsingPost(req: operations.MovePadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.MovePadUsingPostResponse>;
    /**
     * padUsersCountUsingGet - returns the number of user that are currently editing this pad
    **/
    padUsersCountUsingGet(req: operations.PadUsersCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersCountUsingGetResponse>;
    /**
     * padUsersCountUsingPost - returns the number of user that are currently editing this pad
    **/
    padUsersCountUsingPost(req: operations.PadUsersCountUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersCountUsingPostResponse>;
    /**
     * padUsersUsingGet - returns the list of users that are currently editing this pad
    **/
    padUsersUsingGet(req: operations.PadUsersUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersUsingGetResponse>;
    /**
     * padUsersUsingPost - returns the list of users that are currently editing this pad
    **/
    padUsersUsingPost(req: operations.PadUsersUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersUsingPostResponse>;
    restoreRevisionUsingGet(req: operations.RestoreRevisionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.RestoreRevisionUsingGetResponse>;
    restoreRevisionUsingPost(req: operations.RestoreRevisionUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.RestoreRevisionUsingPostResponse>;
    saveRevisionUsingGet(req: operations.SaveRevisionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SaveRevisionUsingGetResponse>;
    saveRevisionUsingPost(req: operations.SaveRevisionUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SaveRevisionUsingPostResponse>;
    /**
     * sendClientsMessageUsingGet - sends a custom message of type msg to the pad
    **/
    sendClientsMessageUsingGet(req: operations.SendClientsMessageUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SendClientsMessageUsingGetResponse>;
    /**
     * sendClientsMessageUsingPost - sends a custom message of type msg to the pad
    **/
    sendClientsMessageUsingPost(req: operations.SendClientsMessageUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SendClientsMessageUsingPostResponse>;
    /**
     * setHtmlUsingGet - sets the text of a pad with HTML
    **/
    setHtmlUsingGet(req: operations.SetHtmlUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SetHtmlUsingGetResponse>;
    /**
     * setHtmlUsingPost - sets the text of a pad with HTML
    **/
    setHtmlUsingPost(req: operations.SetHtmlUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SetHtmlUsingPostResponse>;
    /**
     * setPublicStatusUsingGet - sets a boolean for the public status of a pad
    **/
    setPublicStatusUsingGet(req: operations.SetPublicStatusUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SetPublicStatusUsingGetResponse>;
    /**
     * setPublicStatusUsingPost - sets a boolean for the public status of a pad
    **/
    setPublicStatusUsingPost(req: operations.SetPublicStatusUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SetPublicStatusUsingPostResponse>;
    /**
     * setTextUsingGet - sets the text of a pad
    **/
    setTextUsingGet(req: operations.SetTextUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SetTextUsingGetResponse>;
    /**
     * setTextUsingPost - sets the text of a pad
    **/
    setTextUsingPost(req: operations.SetTextUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SetTextUsingPostResponse>;
}
export {};
