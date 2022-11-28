import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://ssm-contacts.{region}.amazonaws.com", "https://ssm-contacts.{region}.amazonaws.com", "http://ssm-contacts.{region}.amazonaws.com.cn", "https://ssm-contacts.{region}.amazonaws.com.cn"];
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
     * acceptPage - Used to acknowledge an engagement to a contact channel during an incident.
    **/
    acceptPage(req: operations.AcceptPageRequest, config?: AxiosRequestConfig): Promise<operations.AcceptPageResponse>;
    /**
     * activateContactChannel - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
    **/
    activateContactChannel(req: operations.ActivateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.ActivateContactChannelResponse>;
    /**
     * createContact - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
    **/
    createContact(req: operations.CreateContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactResponse>;
    /**
     * createContactChannel - A contact channel is the method that Incident Manager uses to engage your contact.
    **/
    createContactChannel(req: operations.CreateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactChannelResponse>;
    /**
     * deactivateContactChannel - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
    **/
    deactivateContactChannel(req: operations.DeactivateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateContactChannelResponse>;
    /**
     * deleteContact - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
    **/
    deleteContact(req: operations.DeleteContactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactResponse>;
    /**
     * deleteContactChannel - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
    **/
    deleteContactChannel(req: operations.DeleteContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactChannelResponse>;
    /**
     * describeEngagement - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
    **/
    describeEngagement(req: operations.DescribeEngagementRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEngagementResponse>;
    /**
     * describePage - Lists details of the engagement to a contact channel.
    **/
    describePage(req: operations.DescribePageRequest, config?: AxiosRequestConfig): Promise<operations.DescribePageResponse>;
    /**
     * getContact - Retrieves information about the specified contact or escalation plan.
    **/
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * getContactChannel - List details about a specific contact channel.
    **/
    getContactChannel(req: operations.GetContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetContactChannelResponse>;
    /**
     * getContactPolicy - Retrieves the resource policies attached to the specified contact or escalation plan.
    **/
    getContactPolicy(req: operations.GetContactPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetContactPolicyResponse>;
    /**
     * listContactChannels - Lists all contact channels for the specified contact.
    **/
    listContactChannels(req: operations.ListContactChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactChannelsResponse>;
    /**
     * listContacts - Lists all contacts and escalation plans in Incident Manager.
    **/
    listContacts(req: operations.ListContactsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactsResponse>;
    /**
     * listEngagements - Lists all engagements that have happened in an incident.
    **/
    listEngagements(req: operations.ListEngagementsRequest, config?: AxiosRequestConfig): Promise<operations.ListEngagementsResponse>;
    /**
     * listPageReceipts - Lists all of the engagements to contact channels that have been acknowledged.
    **/
    listPageReceipts(req: operations.ListPageReceiptsRequest, config?: AxiosRequestConfig): Promise<operations.ListPageReceiptsResponse>;
    /**
     * listPagesByContact - Lists the engagements to a contact's contact channels.
    **/
    listPagesByContact(req: operations.ListPagesByContactRequest, config?: AxiosRequestConfig): Promise<operations.ListPagesByContactResponse>;
    /**
     * listPagesByEngagement - Lists the engagements to contact channels that occurred by engaging a contact.
    **/
    listPagesByEngagement(req: operations.ListPagesByEngagementRequest, config?: AxiosRequestConfig): Promise<operations.ListPagesByEngagementResponse>;
    /**
     * listTagsForResource - Lists the tags of an escalation plan or contact.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putContactPolicy - Adds a resource to the specified contact or escalation plan.
    **/
    putContactPolicy(req: operations.PutContactPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutContactPolicyResponse>;
    /**
     * sendActivationCode - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
    **/
    sendActivationCode(req: operations.SendActivationCodeRequest, config?: AxiosRequestConfig): Promise<operations.SendActivationCodeResponse>;
    /**
     * startEngagement - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
    **/
    startEngagement(req: operations.StartEngagementRequest, config?: AxiosRequestConfig): Promise<operations.StartEngagementResponse>;
    /**
     * stopEngagement - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
    **/
    stopEngagement(req: operations.StopEngagementRequest, config?: AxiosRequestConfig): Promise<operations.StopEngagementResponse>;
    /**
     * tagResource - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateContact - Updates the contact or escalation plan specified.
    **/
    updateContact(req: operations.UpdateContactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactResponse>;
    /**
     * updateContactChannel - Updates a contact's contact channel.
    **/
    updateContactChannel(req: operations.UpdateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactChannelResponse>;
}
export {};
