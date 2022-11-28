import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCombinedSubmissionPathParams extends SpeakeasyBase {
    combinedSubmissionId: string;
}
export declare class GetCombinedSubmissionSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}
export declare class GetCombinedSubmissionCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
    id: string;
    type: GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
}
export declare enum GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}
export declare class GetCombinedSubmissionCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
    type: GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;
    url: string;
}
export declare enum GetCombinedSubmissionCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}
export declare class GetCombinedSubmissionCombinedSubmission extends SpeakeasyBase {
    actions?: shared.CombinedSubmissionAction[];
    downloadUrl?: string;
    expired: boolean;
    expiresAt?: string;
    id: string;
    metadata?: Map<string, any>;
    pdfHash?: string;
    sourcePdfs: any[];
    state: GetCombinedSubmissionCombinedSubmissionStateEnum;
    submissionIds: string[];
}
export declare class GetCombinedSubmissionRequest extends SpeakeasyBase {
    pathParams: GetCombinedSubmissionPathParams;
    security: GetCombinedSubmissionSecurity;
}
export declare class GetCombinedSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    combinedSubmission?: GetCombinedSubmissionCombinedSubmission;
    error?: shared.Error;
}
