import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://wellarchitected.{region}.amazonaws.com", "https://wellarchitected.{region}.amazonaws.com", "http://wellarchitected.{region}.amazonaws.com.cn", "https://wellarchitected.{region}.amazonaws.com.cn"];
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
     * associateLenses - Associate a lens to a workload.
    **/
    associateLenses(req: operations.AssociateLensesRequest, config?: AxiosRequestConfig): Promise<operations.AssociateLensesResponse>;
    /**
     * createMilestone - Create a milestone for an existing workload.
    **/
    createMilestone(req: operations.CreateMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.CreateMilestoneResponse>;
    /**
     * createWorkload - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other AWS accounts and IAM users in the same AWS Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>AWS Well-Architected Tool User Guide</i>.</p>
    **/
    createWorkload(req: operations.CreateWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkloadResponse>;
    /**
     * createWorkloadShare - <p>Create a workload share.</p> <p>The owner of a workload can share it with other AWS accounts and IAM users in the same AWS Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the <i>AWS Well-Architected Tool User Guide</i>.</p>
    **/
    createWorkloadShare(req: operations.CreateWorkloadShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkloadShareResponse>;
    /**
     * deleteWorkload - Delete an existing workload.
    **/
    deleteWorkload(req: operations.DeleteWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkloadResponse>;
    /**
     * deleteWorkloadShare - Delete a workload share.
    **/
    deleteWorkloadShare(req: operations.DeleteWorkloadShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkloadShareResponse>;
    /**
     * disassociateLenses - <p>Disassociate a lens from a workload.</p> <note> <p>The AWS Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
    **/
    disassociateLenses(req: operations.DisassociateLensesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateLensesResponse>;
    /**
     * getAnswer - Get the answer to a specific question in a workload review.
    **/
    getAnswer(req: operations.GetAnswerRequest, config?: AxiosRequestConfig): Promise<operations.GetAnswerResponse>;
    /**
     * getLensReview - Get lens review.
    **/
    getLensReview(req: operations.GetLensReviewRequest, config?: AxiosRequestConfig): Promise<operations.GetLensReviewResponse>;
    /**
     * getLensReviewReport - Get lens review report.
    **/
    getLensReviewReport(req: operations.GetLensReviewReportRequest, config?: AxiosRequestConfig): Promise<operations.GetLensReviewReportResponse>;
    /**
     * getLensVersionDifference - Get lens version differences.
    **/
    getLensVersionDifference(req: operations.GetLensVersionDifferenceRequest, config?: AxiosRequestConfig): Promise<operations.GetLensVersionDifferenceResponse>;
    /**
     * getMilestone - Get a milestone for an existing workload.
    **/
    getMilestone(req: operations.GetMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.GetMilestoneResponse>;
    /**
     * getWorkload - Get an existing workload.
    **/
    getWorkload(req: operations.GetWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkloadResponse>;
    /**
     * listAnswers - List of answers.
    **/
    listAnswers(req: operations.ListAnswersRequest, config?: AxiosRequestConfig): Promise<operations.ListAnswersResponse>;
    /**
     * listLensReviewImprovements - List lens review improvements.
    **/
    listLensReviewImprovements(req: operations.ListLensReviewImprovementsRequest, config?: AxiosRequestConfig): Promise<operations.ListLensReviewImprovementsResponse>;
    /**
     * listLensReviews - List lens reviews.
    **/
    listLensReviews(req: operations.ListLensReviewsRequest, config?: AxiosRequestConfig): Promise<operations.ListLensReviewsResponse>;
    /**
     * listLenses - List the available lenses.
    **/
    listLenses(req: operations.ListLensesRequest, config?: AxiosRequestConfig): Promise<operations.ListLensesResponse>;
    /**
     * listMilestones - List all milestones for an existing workload.
    **/
    listMilestones(req: operations.ListMilestonesRequest, config?: AxiosRequestConfig): Promise<operations.ListMilestonesResponse>;
    /**
     * listNotifications - List lens notifications.
    **/
    listNotifications(req: operations.ListNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationsResponse>;
    /**
     * listShareInvitations - List the workload invitations.
    **/
    listShareInvitations(req: operations.ListShareInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListShareInvitationsResponse>;
    /**
     * listTagsForResource - List the tags for a resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listWorkloadShares - List the workload shares associated with the workload.
    **/
    listWorkloadShares(req: operations.ListWorkloadSharesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkloadSharesResponse>;
    /**
     * listWorkloads - List workloads. Paginated.
    **/
    listWorkloads(req: operations.ListWorkloadsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkloadsResponse>;
    /**
     * tagResource - Adds one or more tags to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Deletes specified tags from a resource.</p> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAnswer - Update the answer to a specific question in a workload review.
    **/
    updateAnswer(req: operations.UpdateAnswerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnswerResponse>;
    /**
     * updateLensReview - Update lens review.
    **/
    updateLensReview(req: operations.UpdateLensReviewRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLensReviewResponse>;
    /**
     * updateShareInvitation - Update a workload invitation.
    **/
    updateShareInvitation(req: operations.UpdateShareInvitationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShareInvitationResponse>;
    /**
     * updateWorkload - Update an existing workload.
    **/
    updateWorkload(req: operations.UpdateWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkloadResponse>;
    /**
     * updateWorkloadShare - Update a workload share.
    **/
    updateWorkloadShare(req: operations.UpdateWorkloadShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkloadShareResponse>;
    /**
     * upgradeLensReview - Upgrade lens review.
    **/
    upgradeLensReview(req: operations.UpgradeLensReviewRequest, config?: AxiosRequestConfig): Promise<operations.UpgradeLensReviewResponse>;
}
export {};
