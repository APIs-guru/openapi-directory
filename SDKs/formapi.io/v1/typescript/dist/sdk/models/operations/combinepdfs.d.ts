import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}
export declare class CombinePdfsCombinePdfsDataSourcePdfs1 extends SpeakeasyBase {
    id: string;
    type: CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum;
}
export declare enum CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum {
    Url = "url"
}
export declare class CombinePdfsCombinePdfsDataSourcePdfs2 extends SpeakeasyBase {
    type: CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum;
    url: string;
}
export declare class CombinePdfsCombinePdfsData extends SpeakeasyBase {
    deleteCustomFiles?: boolean;
    expiresIn?: number;
    metadata?: Map<string, any>;
    sourcePdfs: any[];
    test?: boolean;
}
export declare class CombinePdfsSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}
export declare class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
    id: string;
    type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
}
export declare enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}
export declare class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
    type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;
    url: string;
}
export declare enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}
export declare class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission extends SpeakeasyBase {
    actions?: shared.CombinedSubmissionAction[];
    downloadUrl?: string;
    expired: boolean;
    expiresAt?: string;
    id: string;
    metadata?: Map<string, any>;
    pdfHash?: string;
    sourcePdfs: any[];
    state: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;
    submissionIds: string[];
}
export declare enum CombinePdfsCreateCombinedSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class CombinePdfsCreateCombinedSubmissionResponse extends SpeakeasyBase {
    combinedSubmission: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission;
    errors?: string[];
    status: CombinePdfsCreateCombinedSubmissionResponseStatusEnum;
}
export declare class CombinePdfsRequest extends SpeakeasyBase {
    request: CombinePdfsCombinePdfsData;
    security: CombinePdfsSecurity;
}
export declare class CombinePdfsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createCombinedSubmissionResponse?: CombinePdfsCreateCombinedSubmissionResponse;
    error?: shared.Error;
    invalidRequest?: shared.InvalidRequest;
}
