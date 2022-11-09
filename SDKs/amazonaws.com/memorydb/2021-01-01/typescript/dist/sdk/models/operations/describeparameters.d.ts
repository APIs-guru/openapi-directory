import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeParametersXAmzTargetEnum {
    AmazonMemoryDbDescribeParameters = "AmazonMemoryDB.DescribeParameters"
}
export declare class DescribeParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeParametersXAmzTargetEnum;
}
export declare class DescribeParametersRequest extends SpeakeasyBase {
    headers: DescribeParametersHeaders;
    request: shared.DescribeParametersRequest;
}
export declare class DescribeParametersResponse extends SpeakeasyBase {
    contentType: string;
    describeParametersResponse?: shared.DescribeParametersResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
