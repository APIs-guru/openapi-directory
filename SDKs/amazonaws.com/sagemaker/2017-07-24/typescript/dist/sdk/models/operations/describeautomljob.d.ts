import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAutoMlJobXAmzTargetEnum {
    SageMakerDescribeAutoMlJob = "SageMaker.DescribeAutoMLJob"
}
export declare class DescribeAutoMlJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutoMlJobXAmzTargetEnum;
}
export declare class DescribeAutoMlJobRequest extends SpeakeasyBase {
    headers: DescribeAutoMlJobHeaders;
    request: shared.DescribeAutoMlJobRequest;
}
export declare class DescribeAutoMlJobResponse extends SpeakeasyBase {
    contentType: string;
    describeAutoMlJobResponse?: shared.DescribeAutoMlJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
