import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEcsClustersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeEcsClustersXAmzTargetEnum {
    OpsWorks20130218DescribeEcsClusters = "OpsWorks_20130218.DescribeEcsClusters"
}
export declare class DescribeEcsClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEcsClustersXAmzTargetEnum;
}
export declare class DescribeEcsClustersRequest extends SpeakeasyBase {
    queryParams: DescribeEcsClustersQueryParams;
    headers: DescribeEcsClustersHeaders;
    request: shared.DescribeEcsClustersRequest;
}
export declare class DescribeEcsClustersResponse extends SpeakeasyBase {
    contentType: string;
    describeEcsClustersResult?: shared.DescribeEcsClustersResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
