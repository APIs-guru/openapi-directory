import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CombineSubmissionsCombinedSubmissionData extends SpeakeasyBase {
    expiresIn?: number;
    metadata?: Map<string, any>;
    submissionIds: string[];
    test?: boolean;
}
export declare class CombineSubmissionsSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}
export declare class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
    id: string;
    type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
}
export declare enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}
export declare class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
    type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;
    url: string;
}
export declare enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}
export declare class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission extends SpeakeasyBase {
    actions?: shared.CombinedSubmissionAction[];
    downloadUrl?: string;
    expired: boolean;
    expiresAt?: string;
    id: string;
    metadata?: Map<string, any>;
    pdfHash?: string;
    sourcePdfs: any[];
    state: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;
    submissionIds: string[];
}
export declare enum CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class CombineSubmissionsCreateCombinedSubmissionResponse extends SpeakeasyBase {
    combinedSubmission: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission;
    errors?: string[];
    status: CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum;
}
export declare class CombineSubmissionsRequest extends SpeakeasyBase {
    request: CombineSubmissionsCombinedSubmissionData;
    security: CombineSubmissionsSecurity;
}
export declare class CombineSubmissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createCombinedSubmissionResponse?: CombineSubmissionsCreateCombinedSubmissionResponse;
    error?: shared.Error;
    invalidRequest?: shared.InvalidRequest;
}
