import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExpireCombinedSubmissionPathParams extends SpeakeasyBase {
    combinedSubmissionId: string;
}
export declare class ExpireCombinedSubmissionSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}
export declare class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
    id: string;
    type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
}
export declare enum ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}
export declare class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
    type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;
    url: string;
}
export declare enum ExpireCombinedSubmissionCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}
export declare class ExpireCombinedSubmissionCombinedSubmission extends SpeakeasyBase {
    actions?: shared.CombinedSubmissionAction[];
    downloadUrl?: string;
    expired: boolean;
    expiresAt?: string;
    id: string;
    metadata?: Map<string, any>;
    pdfHash?: string;
    sourcePdfs: any[];
    state: ExpireCombinedSubmissionCombinedSubmissionStateEnum;
    submissionIds: string[];
}
export declare class ExpireCombinedSubmissionRequest extends SpeakeasyBase {
    pathParams: ExpireCombinedSubmissionPathParams;
    security: ExpireCombinedSubmissionSecurity;
}
export declare class ExpireCombinedSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    combinedSubmission?: ExpireCombinedSubmissionCombinedSubmission;
    error?: shared.Error;
}
