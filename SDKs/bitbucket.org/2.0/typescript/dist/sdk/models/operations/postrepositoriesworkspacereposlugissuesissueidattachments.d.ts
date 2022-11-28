import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathParams;
    security: PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
}
