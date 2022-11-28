import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAgentVersionsXAmzTargetEnum {
    OpsWorks20130218DescribeAgentVersions = "OpsWorks_20130218.DescribeAgentVersions"
}
export declare class DescribeAgentVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAgentVersionsXAmzTargetEnum;
}
export declare class DescribeAgentVersionsRequest extends SpeakeasyBase {
    headers: DescribeAgentVersionsHeaders;
    request: shared.DescribeAgentVersionsRequest;
}
export declare class DescribeAgentVersionsResponse extends SpeakeasyBase {
    contentType: string;
    describeAgentVersionsResult?: shared.DescribeAgentVersionsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
