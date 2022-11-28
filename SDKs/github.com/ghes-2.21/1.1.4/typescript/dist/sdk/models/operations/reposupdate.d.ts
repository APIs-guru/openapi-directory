import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdatePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum ReposUpdateRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Visibility = "visibility",
    Internal = "internal"
}
export declare class ReposUpdateRequestBody extends SpeakeasyBase {
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    archived?: boolean;
    defaultBranch?: string;
    deleteBranchOnMerge?: boolean;
    description?: string;
    hasIssues?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    isTemplate?: boolean;
    name?: string;
    private?: boolean;
    visibility?: ReposUpdateRequestBodyVisibilityEnum;
}
export declare class ReposUpdateRequest extends SpeakeasyBase {
    pathParams: ReposUpdatePathParams;
    request?: ReposUpdateRequestBody;
}
export declare class ReposUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    fullRepository?: shared.FullRepository;
    validationError?: shared.ValidationError;
}
