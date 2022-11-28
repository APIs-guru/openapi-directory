import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTextTranslationJobXAmzTargetEnum {
    AwsShineFrontendService20170701DescribeTextTranslationJob = "AWSShineFrontendService_20170701.DescribeTextTranslationJob"
}
export declare class DescribeTextTranslationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTextTranslationJobXAmzTargetEnum;
}
export declare class DescribeTextTranslationJobRequest extends SpeakeasyBase {
    headers: DescribeTextTranslationJobHeaders;
    request: shared.DescribeTextTranslationJobRequest;
}
export declare class DescribeTextTranslationJobResponse extends SpeakeasyBase {
    contentType: string;
    describeTextTranslationJobResponse?: shared.DescribeTextTranslationJobResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
