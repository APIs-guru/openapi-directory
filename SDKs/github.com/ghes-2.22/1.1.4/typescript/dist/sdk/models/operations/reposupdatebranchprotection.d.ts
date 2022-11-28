import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateBranchProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
/**
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
export declare class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
    teams?: string[];
    users?: string[];
}
/**
 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
**/
export declare class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews extends SpeakeasyBase {
    dismissStaleReviews?: boolean;
    dismissalRestrictions?: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions;
    requireCodeOwnerReviews?: boolean;
    requiredApprovingReviewCount?: number;
}
/**
 * Require status checks to pass before merging. Set to `null` to disable.
**/
export declare class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks extends SpeakeasyBase {
    contexts: string[];
    strict: boolean;
}
/**
 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
**/
export declare class ReposUpdateBranchProtectionRequestBodyRestrictions extends SpeakeasyBase {
    apps?: string[];
    teams: string[];
    users: string[];
}
export declare class ReposUpdateBranchProtectionRequestBody extends SpeakeasyBase {
    allowDeletions?: boolean;
    allowForcePushes?: boolean;
    enforceAdmins: boolean;
    requiredLinearHistory?: boolean;
    requiredPullRequestReviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews;
    requiredStatusChecks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks;
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions;
}
export declare class ReposUpdateBranchProtection415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposUpdateBranchProtectionRequest extends SpeakeasyBase {
    pathParams: ReposUpdateBranchProtectionPathParams;
    request?: ReposUpdateBranchProtectionRequestBody;
}
export declare class ReposUpdateBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    protectedBranch?: shared.ProtectedBranch;
    reposUpdateBranchProtection415ApplicationJsonObject?: ReposUpdateBranchProtection415ApplicationJson;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
