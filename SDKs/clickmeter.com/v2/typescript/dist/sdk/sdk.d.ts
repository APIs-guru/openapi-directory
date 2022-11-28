import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://apiv2.clickmeter.com:80", "https://apiv2.clickmeter.com:80"];
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
     * accountDeleteDomainWhitelist - Delete an domain entry
    **/
    accountDeleteDomainWhitelist(req: operations.AccountDeleteDomainWhitelistRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteDomainWhitelistResponse>;
    /**
     * accountDeleteGuest - Delete a guest
    **/
    accountDeleteGuest(req: operations.AccountDeleteGuestRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteGuestResponse>;
    /**
     * accountDeleteIpBlacklist - Delete an ip blacklist entry
    **/
    accountDeleteIpBlacklist(req: operations.AccountDeleteIpBlacklistRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteIpBlacklistResponse>;
    /**
     * accountGet - Retrieve current account data
    **/
    accountGet(config?: AxiosRequestConfig): Promise<operations.AccountGetResponse>;
    /**
     * accountGetDomainWhitelist - Retrieve list of a domains allowed to redirect in DDU mode
    **/
    accountGetDomainWhitelist(req: operations.AccountGetDomainWhitelistRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetDomainWhitelistResponse>;
    /**
     * accountGetGuest - Retrieve a guest
    **/
    accountGetGuest(req: operations.AccountGetGuestRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetGuestResponse>;
    /**
     * accountGetGuests - Retrieve list of a guest
    **/
    accountGetGuests(req: operations.AccountGetGuestsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetGuestsResponse>;
    /**
     * accountGetGuestsCount - Retrieve count of guests
    **/
    accountGetGuestsCount(req: operations.AccountGetGuestsCountRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetGuestsCountResponse>;
    /**
     * accountGetIpBlacklist - Retrieve list of a ip to exclude from event tracking
    **/
    accountGetIpBlacklist(req: operations.AccountGetIpBlacklistRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetIpBlacklistResponse>;
    /**
     * accountGetPermissions - Retrieve permissions for a guest
    **/
    accountGetPermissions(req: operations.AccountGetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetPermissionsResponse>;
    /**
     * accountGetPermissionsCount - Retrieve count of the permissions for a guest
    **/
    accountGetPermissionsCount(req: operations.AccountGetPermissionsCountRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetPermissionsCountResponse>;
    /**
     * accountGetPlan - Retrieve current account plan
    **/
    accountGetPlan(config?: AxiosRequestConfig): Promise<operations.AccountGetPlanResponse>;
    /**
     * accountPatchPermissions - Change the permission on a shared object
    **/
    accountPatchPermissions(req: operations.AccountPatchPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountPatchPermissionsResponse>;
    /**
     * accountPost - Update current account data
    **/
    accountPost(req: operations.AccountPostRequest, config?: AxiosRequestConfig): Promise<operations.AccountPostResponse>;
    /**
     * accountPostGuest - Update a guest
    **/
    accountPostGuest(req: operations.AccountPostGuestRequest, config?: AxiosRequestConfig): Promise<operations.AccountPostGuestResponse>;
    /**
     * accountPutDomainWhitelist - Create an domain entry
    **/
    accountPutDomainWhitelist(req: operations.AccountPutDomainWhitelistRequest, config?: AxiosRequestConfig): Promise<operations.AccountPutDomainWhitelistResponse>;
    /**
     * accountPutGuest - Create a guest
    **/
    accountPutGuest(req: operations.AccountPutGuestRequest, config?: AxiosRequestConfig): Promise<operations.AccountPutGuestResponse>;
    /**
     * accountPutIpBlacklist - Create an ip blacklist entry
    **/
    accountPutIpBlacklist(req: operations.AccountPutIpBlacklistRequest, config?: AxiosRequestConfig): Promise<operations.AccountPutIpBlacklistResponse>;
    /**
     * aggregatedGetConversionsSummary - Retrieve statistics about a subset of conversions for a timeframe with conversions data
    **/
    aggregatedGetConversionsSummary(req: operations.AggregatedGetConversionsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetConversionsSummaryResponse>;
    /**
     * aggregatedGetDatapointsSummary - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
    **/
    aggregatedGetDatapointsSummary(req: operations.AggregatedGetDatapointsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetDatapointsSummaryResponse>;
    /**
     * aggregatedGetGroupsSummary - Retrieve statistics about a subset of groups for a timeframe with groups data
    **/
    aggregatedGetGroupsSummary(req: operations.AggregatedGetGroupsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetGroupsSummaryResponse>;
    /**
     * aggregatedGetStatisticsList - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
    **/
    aggregatedGetStatisticsList(req: operations.AggregatedGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetStatisticsListResponse>;
    /**
     * aggregatedGetStatisticsSingle - Retrieve statistics about this customer for a timeframe
    **/
    aggregatedGetStatisticsSingle(req: operations.AggregatedGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.AggregatedGetStatisticsSingleResponse>;
    /**
     * clickStreamGet - Retrieve the latest list of events of this account. Limited to last 100.
    **/
    clickStreamGet(req: operations.ClickStreamGetRequest, config?: AxiosRequestConfig): Promise<operations.ClickStreamGetResponse>;
    /**
     * conversionsCount - Retrieve a count of conversions
    **/
    conversionsCount(req: operations.ConversionsCountRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsCountResponse>;
    /**
     * conversionsDelete - Delete conversion specified by id
    **/
    conversionsDelete(req: operations.ConversionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsDeleteResponse>;
    /**
     * conversionsGet - Retrieve a list of conversions
    **/
    conversionsGet(req: operations.ConversionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetResponse>;
    /**
     * conversionsGetDatapoints - Retrieve a list of datapoints connected to this conversion
    **/
    conversionsGetDatapoints(req: operations.ConversionsGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetDatapointsResponse>;
    /**
     * conversionsGetDatapointsCount - Retrieve a count of datapoints connected to this conversion
    **/
    conversionsGetDatapointsCount(req: operations.ConversionsGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetDatapointsCountResponse>;
    /**
     * conversionsGetHits - Retrieve the list of events related to this conversion.
    **/
    conversionsGetHits(req: operations.ConversionsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetHitsResponse>;
    /**
     * conversionsGetStatisticsAllList - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
    **/
    conversionsGetStatisticsAllList(req: operations.ConversionsGetStatisticsAllListRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetStatisticsAllListResponse>;
    /**
     * conversionsGetStatisticsList - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
    **/
    conversionsGetStatisticsList(req: operations.ConversionsGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetStatisticsListResponse>;
    /**
     * conversionsGetStatisticsSingle - Retrieve statistics about this conversion for a timeframe
    **/
    conversionsGetStatisticsSingle(req: operations.ConversionsGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetStatisticsSingleResponse>;
    /**
     * conversionsGetTops - Retrieve a top report connected to this conversion
    **/
    conversionsGetTops(req: operations.ConversionsGetTopsRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsGetTopsResponse>;
    /**
     * conversionsPatch - Modify the association between a conversion and a datapoint
    **/
    conversionsPatch(req: operations.ConversionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchResponse>;
    /**
     * conversionsPatchNotes - Fast patch the "notes" field of a conversion
    **/
    conversionsPatchNotes(req: operations.ConversionsPatchNotesRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPatchNotesResponse>;
    /**
     * conversionsPost - Update conversion specified by id
    **/
    conversionsPost(req: operations.ConversionsPostRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPostResponse>;
    /**
     * conversionsPut - Create a conversion
    **/
    conversionsPut(req: operations.ConversionsPutRequest, config?: AxiosRequestConfig): Promise<operations.ConversionsPutResponse>;
    /**
     * dataPointsCount - Count the datapoints associated to the user
    **/
    dataPointsCount(req: operations.DataPointsCountRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsCountResponse>;
    /**
     * dataPointsDelete - Delete a datapoint
    **/
    dataPointsDelete(req: operations.DataPointsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsDeleteResponse>;
    /**
     * dataPointsGet - List of all the datapoints associated to the user
    **/
    dataPointsGet(req: operations.DataPointsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetResponse>;
    /**
     * dataPointsGetHits - Retrieve the list of events related to this datapoint.
    **/
    dataPointsGetHits(req: operations.DataPointsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetHitsResponse>;
    /**
     * dataPointsGetStatisticsAggregatedSingle - Retrieve statistics about this customer for a timeframe by groups
    **/
    dataPointsGetStatisticsAggregatedSingle(req: operations.DataPointsGetStatisticsAggregatedSingleRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsAggregatedSingleResponse>;
    /**
     * dataPointsGetStatisticsAllList - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
    **/
    dataPointsGetStatisticsAllList(req: operations.DataPointsGetStatisticsAllListRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsAllListResponse>;
    /**
     * dataPointsGetStatisticsList - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
    **/
    dataPointsGetStatisticsList(req: operations.DataPointsGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsListResponse>;
    /**
     * dataPointsGetStatisticsSingle - Retrieve statistics about this datapoint for a timeframe
    **/
    dataPointsGetStatisticsSingle(req: operations.DataPointsGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetStatisticsSingleResponse>;
    /**
     * dataPointsGetTops - Retrieve a top report connected to this datapoint
    **/
    dataPointsGetTops(req: operations.DataPointsGetTopsRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsGetTopsResponse>;
    /**
     * dataPointsPatchFavourite - Fast switch the "favourite" field of a datapoint
    **/
    dataPointsPatchFavourite(req: operations.DataPointsPatchFavouriteRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPatchFavouriteResponse>;
    /**
     * dataPointsPatchNotes - Fast patch the "notes" field of a datapoint
    **/
    dataPointsPatchNotes(req: operations.DataPointsPatchNotesRequest, config?: AxiosRequestConfig): Promise<operations.DataPointsPatchNotesResponse>;
    /**
     * domainsCount - Retrieve count of domains
    **/
    domainsCount(req: operations.DomainsCountRequest, config?: AxiosRequestConfig): Promise<operations.DomainsCountResponse>;
    /**
     * domainsDelete - Delete a domain
    **/
    domainsDelete(req: operations.DomainsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DomainsDeleteResponse>;
    /**
     * domainsGet - Retrieve a list of domains
    **/
    domainsGet(req: operations.DomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsGetResponse>;
    /**
     * domainsPut - Create a domain
    **/
    domainsPut(req: operations.DomainsPutRequest, config?: AxiosRequestConfig): Promise<operations.DomainsPutResponse>;
    /**
     * domainsUpdate - Update a domain
    **/
    domainsUpdate(req: operations.DomainsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DomainsUpdateResponse>;
    /**
     * getConversionsConversionId - Retrieve conversion specified by id
    **/
    getConversionsConversionId(req: operations.GetConversionsConversionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConversionsConversionIdResponse>;
    /**
     * getDatapointsId - Get a datapoint
    **/
    getDatapointsId(req: operations.GetDatapointsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDatapointsIdResponse>;
    /**
     * getDomainsId - Get a domain
    **/
    getDomainsId(req: operations.GetDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsIdResponse>;
    /**
     * getGroupsId - Get a group
    **/
    getGroupsId(req: operations.GetGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsIdResponse>;
    /**
     * getRetargetingId - Get a retargeting script object
    **/
    getRetargetingId(req: operations.GetRetargetingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRetargetingIdResponse>;
    /**
     * getTagsTagId - Retrieve a tag
    **/
    getTagsTagId(req: operations.GetTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsTagIdResponse>;
    /**
     * groupsCount - Count the groups associated to the user.
    **/
    groupsCount(req: operations.GroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.GroupsCountResponse>;
    /**
     * groupsDelete - Delete group specified by id
    **/
    groupsDelete(req: operations.GroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsDeleteResponse>;
    /**
     * groupsGet - List of all the groups associated to the user.
    **/
    groupsGet(req: operations.GroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetResponse>;
    /**
     * groupsGetDatapoints - List of all the datapoints associated to the user in this group.
    **/
    groupsGetDatapoints(req: operations.GroupsGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetDatapointsResponse>;
    /**
     * groupsGetDatapointsCount - Count the datapoints associated to the user in this group.
    **/
    groupsGetDatapointsCount(req: operations.GroupsGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetDatapointsCountResponse>;
    /**
     * groupsGetDatapointsSummary - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
    **/
    groupsGetDatapointsSummary(req: operations.GroupsGetDatapointsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetDatapointsSummaryResponse>;
    /**
     * groupsGetHits - Retrieve the list of events related to this group.
    **/
    groupsGetHits(req: operations.GroupsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetHitsResponse>;
    /**
     * groupsGetStatisticsAggregatedSingle - Retrieve statistics about this customer for a timeframe by groups
    **/
    groupsGetStatisticsAggregatedSingle(req: operations.GroupsGetStatisticsAggregatedSingleRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsAggregatedSingleResponse>;
    /**
     * groupsGetStatisticsAllList - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
    **/
    groupsGetStatisticsAllList(req: operations.GroupsGetStatisticsAllListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsAllListResponse>;
    /**
     * groupsGetStatisticsList - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
    **/
    groupsGetStatisticsList(req: operations.GroupsGetStatisticsListRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsListResponse>;
    /**
     * groupsGetStatisticsSingle - Retrieve statistics about this group for a timeframe
    **/
    groupsGetStatisticsSingle(req: operations.GroupsGetStatisticsSingleRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetStatisticsSingleResponse>;
    /**
     * groupsGetTops - Retrieve a top report connected to this group
    **/
    groupsGetTops(req: operations.GroupsGetTopsRequest, config?: AxiosRequestConfig): Promise<operations.GroupsGetTopsResponse>;
    /**
     * groupsPatchFavourite - Fast switch the "favourite" field of a group
    **/
    groupsPatchFavourite(req: operations.GroupsPatchFavouriteRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPatchFavouriteResponse>;
    /**
     * groupsPatchNotes - Fast patch the "notes" field of a group
    **/
    groupsPatchNotes(req: operations.GroupsPatchNotesRequest, config?: AxiosRequestConfig): Promise<operations.GroupsPatchNotesResponse>;
    /**
     * hitsGetHits - Retrieve the list of events related to this account.
    **/
    hitsGetHits(req: operations.HitsGetHitsRequest, config?: AxiosRequestConfig): Promise<operations.HitsGetHitsResponse>;
    /**
     * meGetMe - Retrieve current account data
    **/
    meGetMe(config?: AxiosRequestConfig): Promise<operations.MeGetMeResponse>;
    /**
     * meGetMePlan - Retrieve current account plan
    **/
    meGetMePlan(config?: AxiosRequestConfig): Promise<operations.MeGetMePlanResponse>;
    /**
     * postAccountGuestsGuestIdTypePermissionsPatch - Change the permission on a shared object
    **/
    postAccountGuestsGuestIdTypePermissionsPatch(req: operations.PostAccountGuestsGuestIdTypePermissionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountGuestsGuestIdTypePermissionsPatchResponse>;
    /**
     * reportsGet - Retrieve a top report
    **/
    reportsGet(req: operations.ReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.ReportsGetResponse>;
    /**
     * retargetingCount - Retrieve count of retargeting scripts
    **/
    retargetingCount(config?: AxiosRequestConfig): Promise<operations.RetargetingCountResponse>;
    /**
     * retargetingDelete - Deletes a retargeting script (and remove associations)
    **/
    retargetingDelete(req: operations.RetargetingDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingDeleteResponse>;
    /**
     * retargetingGet - List of all the retargeting scripts associated to the user
    **/
    retargetingGet(req: operations.RetargetingGetRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingGetResponse>;
    /**
     * retargetingGetDatapoints - List of all the datapoints associated to the retargeting script.
    **/
    retargetingGetDatapoints(req: operations.RetargetingGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingGetDatapointsResponse>;
    /**
     * retargetingGetDatapointsCount - Count the datapoints associated to the retargeting script.
    **/
    retargetingGetDatapointsCount(req: operations.RetargetingGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingGetDatapointsCountResponse>;
    /**
     * retargetingPost - Updates a retargeting script
    **/
    retargetingPost(req: operations.RetargetingPostRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingPostResponse>;
    /**
     * retargetingPut - Creates a retargeting script
    **/
    retargetingPut(req: operations.RetargetingPutRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingPutResponse>;
    /**
     * tagsCount - List of all the groups associated to the user filtered by this tag.
    **/
    tagsCount(req: operations.TagsCountRequest, config?: AxiosRequestConfig): Promise<operations.TagsCountResponse>;
    /**
     * tagsDelete - Delete a tag
    **/
    tagsDelete(req: operations.TagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagsDeleteResponse>;
    /**
     * tagsDeleteRelatedDatapoints - Delete the association of this tag with all datapoints
    **/
    tagsDeleteRelatedDatapoints(req: operations.TagsDeleteRelatedDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.TagsDeleteRelatedDatapointsResponse>;
    /**
     * tagsDeleteRelatedGroups - Delete the association of this tag with all groups
    **/
    tagsDeleteRelatedGroups(req: operations.TagsDeleteRelatedGroupsRequest, config?: AxiosRequestConfig): Promise<operations.TagsDeleteRelatedGroupsResponse>;
    /**
     * tagsGet - List of all the groups associated to the user filtered by this tag.
    **/
    tagsGet(req: operations.TagsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetResponse>;
    /**
     * tagsGetDatapoints - List of all the datapoints associated to the user filtered by this tag
    **/
    tagsGetDatapoints(req: operations.TagsGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetDatapointsResponse>;
    /**
     * tagsGetDatapointsCount - Count the datapoints associated to the user filtered by this tag
    **/
    tagsGetDatapointsCount(req: operations.TagsGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetDatapointsCountResponse>;
    /**
     * tagsGetGroups - List of all the groups associated to the user filtered by this tag.
    **/
    tagsGetGroups(req: operations.TagsGetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetGroupsResponse>;
    /**
     * tagsGetGroupsCount - Count the groups associated to the user filtered by this tag
    **/
    tagsGetGroupsCount(req: operations.TagsGetGroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetGroupsCountResponse>;
    /**
     * tagsPatchDataPoint - Associate/Deassociate a tag with a datapoint
    **/
    tagsPatchDataPoint(req: operations.TagsPatchDataPointRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchDataPointResponse>;
    /**
     * tagsPatchGroup - Associate/Deassociate a tag with a group
    **/
    tagsPatchGroup(req: operations.TagsPatchGroupRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchGroupResponse>;
    /**
     * tagsPatchTagName - Fast patch a tag name
    **/
    tagsPatchTagName(req: operations.TagsPatchTagNameRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchTagNameResponse>;
    /**
     * tagsPut - Create a tag
    **/
    tagsPut(req: operations.TagsPutRequest, config?: AxiosRequestConfig): Promise<operations.TagsPutResponse>;
}
export {};
