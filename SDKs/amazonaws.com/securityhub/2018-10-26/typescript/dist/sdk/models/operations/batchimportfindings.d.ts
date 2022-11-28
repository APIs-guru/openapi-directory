import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchImportFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchImportFindingsRequestBody extends SpeakeasyBase {
    findings: shared.AwsSecurityFinding[];
}
export declare class BatchImportFindingsRequest extends SpeakeasyBase {
    headers: BatchImportFindingsHeaders;
    request: BatchImportFindingsRequestBody;
}
export declare class BatchImportFindingsResponse extends SpeakeasyBase {
    batchImportFindingsResponse?: shared.BatchImportFindingsResponse;
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
