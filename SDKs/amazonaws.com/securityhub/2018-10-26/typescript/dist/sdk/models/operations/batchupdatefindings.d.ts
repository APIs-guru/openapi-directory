import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchUpdateFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The updated note.
**/
export declare class BatchUpdateFindingsRequestBodyNote extends SpeakeasyBase {
    text?: string;
    updatedBy?: string;
}
/**
 * Updates to the severity information for a finding.
**/
export declare class BatchUpdateFindingsRequestBodySeverity extends SpeakeasyBase {
    label?: shared.SeverityLabelEnum;
    normalized?: number;
    product?: number;
}
export declare enum BatchUpdateFindingsRequestBodyVerificationStateEnum {
    Unknown = "UNKNOWN",
    TruePositive = "TRUE_POSITIVE",
    FalsePositive = "FALSE_POSITIVE",
    BenignPositive = "BENIGN_POSITIVE"
}
/**
 * Used to update information about the investigation into the finding.
**/
export declare class BatchUpdateFindingsRequestBodyWorkflow extends SpeakeasyBase {
    status?: shared.WorkflowStatusEnum;
}
export declare class BatchUpdateFindingsRequestBody extends SpeakeasyBase {
    confidence?: number;
    criticality?: number;
    findingIdentifiers: shared.AwsSecurityFindingIdentifier[];
    note?: BatchUpdateFindingsRequestBodyNote;
    relatedFindings?: shared.RelatedFinding[];
    severity?: BatchUpdateFindingsRequestBodySeverity;
    types?: string[];
    userDefinedFields?: Map<string, string>;
    verificationState?: BatchUpdateFindingsRequestBodyVerificationStateEnum;
    workflow?: BatchUpdateFindingsRequestBodyWorkflow;
}
export declare class BatchUpdateFindingsRequest extends SpeakeasyBase {
    headers: BatchUpdateFindingsHeaders;
    request: BatchUpdateFindingsRequestBody;
}
export declare class BatchUpdateFindingsResponse extends SpeakeasyBase {
    batchUpdateFindingsResponse?: shared.BatchUpdateFindingsResponse;
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
