import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateInOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum ReposCreateInOrgRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Visibility = "visibility",
    Internal = "internal"
}
export declare class ReposCreateInOrgRequestBody extends SpeakeasyBase {
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    autoInit?: boolean;
    deleteBranchOnMerge?: boolean;
    description?: string;
    gitignoreTemplate?: string;
    hasIssues?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    isTemplate?: boolean;
    licenseTemplate?: string;
    name: string;
    private?: boolean;
    teamId?: number;
    visibility?: ReposCreateInOrgRequestBodyVisibilityEnum;
}
export declare class ReposCreateInOrgRequest extends SpeakeasyBase {
    pathParams: ReposCreateInOrgPathParams;
    request?: ReposCreateInOrgRequestBody;
}
export declare class ReposCreateInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    repository?: shared.Repository;
    validationError?: shared.ValidationError;
}
