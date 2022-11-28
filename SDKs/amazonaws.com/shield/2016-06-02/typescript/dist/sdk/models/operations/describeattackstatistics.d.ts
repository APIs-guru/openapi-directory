import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAttackStatisticsXAmzTargetEnum {
    AwsShield20160616DescribeAttackStatistics = "AWSShield_20160616.DescribeAttackStatistics"
}
export declare class DescribeAttackStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAttackStatisticsXAmzTargetEnum;
}
export declare class DescribeAttackStatisticsRequest extends SpeakeasyBase {
    headers: DescribeAttackStatisticsHeaders;
    request: Map<string, any>;
}
export declare class DescribeAttackStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    describeAttackStatisticsResponse?: shared.DescribeAttackStatisticsResponse;
    internalErrorException?: any;
    statusCode: number;
}
