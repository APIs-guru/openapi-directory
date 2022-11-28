import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRaidArraysXAmzTargetEnum {
    OpsWorks20130218DescribeRaidArrays = "OpsWorks_20130218.DescribeRaidArrays"
}
export declare class DescribeRaidArraysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRaidArraysXAmzTargetEnum;
}
export declare class DescribeRaidArraysRequest extends SpeakeasyBase {
    headers: DescribeRaidArraysHeaders;
    request: shared.DescribeRaidArraysRequest;
}
export declare class DescribeRaidArraysResponse extends SpeakeasyBase {
    contentType: string;
    describeRaidArraysResult?: shared.DescribeRaidArraysResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
