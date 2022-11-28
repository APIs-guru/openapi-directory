import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    autoInit?: boolean;
    deleteBranchOnMerge?: boolean;
    description?: string;
    gitignoreTemplate?: string;
    hasDownloads?: boolean;
    hasIssues?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    isTemplate?: boolean;
    licenseTemplate?: string;
    name: string;
    private?: boolean;
    teamId?: number;
}
export declare class ReposCreateForAuthenticatedUserRequest extends SpeakeasyBase {
    request?: ReposCreateForAuthenticatedUserRequestBody;
}
export declare class ReposCreateForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    repository?: shared.Repository;
    scimError?: shared.ScimError;
    validationError?: shared.ValidationError;
}
