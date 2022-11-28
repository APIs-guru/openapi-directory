import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeCluster = "AWSIESnowballJobManagementService.DescribeCluster"
}
export declare class DescribeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClusterXAmzTargetEnum;
}
export declare class DescribeClusterRequest extends SpeakeasyBase {
    headers: DescribeClusterHeaders;
    request: shared.DescribeClusterRequest;
}
export declare class DescribeClusterResponse extends SpeakeasyBase {
    contentType: string;
    describeClusterResult?: shared.DescribeClusterResult;
    invalidResourceException?: any;
    statusCode: number;
}
