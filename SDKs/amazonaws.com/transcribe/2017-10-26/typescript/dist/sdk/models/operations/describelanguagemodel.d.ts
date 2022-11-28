import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLanguageModelXAmzTargetEnum {
    TranscribeDescribeLanguageModel = "Transcribe.DescribeLanguageModel"
}
export declare class DescribeLanguageModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLanguageModelXAmzTargetEnum;
}
export declare class DescribeLanguageModelRequest extends SpeakeasyBase {
    headers: DescribeLanguageModelHeaders;
    request: shared.DescribeLanguageModelRequest;
}
export declare class DescribeLanguageModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeLanguageModelResponse?: shared.DescribeLanguageModelResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
