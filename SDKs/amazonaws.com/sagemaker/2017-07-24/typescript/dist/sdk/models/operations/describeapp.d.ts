import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAppXAmzTargetEnum {
    SageMakerDescribeApp = "SageMaker.DescribeApp"
}
export declare class DescribeAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppXAmzTargetEnum;
}
export declare class DescribeAppRequest extends SpeakeasyBase {
    headers: DescribeAppHeaders;
    request: shared.DescribeAppRequest;
}
export declare class DescribeAppResponse extends SpeakeasyBase {
    contentType: string;
    describeAppResponse?: shared.DescribeAppResponse;
    resourceNotFound?: any;
    statusCode: number;
}
