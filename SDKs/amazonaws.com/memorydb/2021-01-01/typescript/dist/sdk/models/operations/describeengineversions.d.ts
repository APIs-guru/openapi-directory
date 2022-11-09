import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEngineVersionsXAmzTargetEnum {
    AmazonMemoryDbDescribeEngineVersions = "AmazonMemoryDB.DescribeEngineVersions"
}
export declare class DescribeEngineVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEngineVersionsXAmzTargetEnum;
}
export declare class DescribeEngineVersionsRequest extends SpeakeasyBase {
    headers: DescribeEngineVersionsHeaders;
    request: shared.DescribeEngineVersionsRequest;
}
export declare class DescribeEngineVersionsResponse extends SpeakeasyBase {
    contentType: string;
    describeEngineVersionsResponse?: shared.DescribeEngineVersionsResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
