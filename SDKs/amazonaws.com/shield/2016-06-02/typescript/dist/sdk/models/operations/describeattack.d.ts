import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAttackXAmzTargetEnum {
    AwsShield20160616DescribeAttack = "AWSShield_20160616.DescribeAttack"
}
export declare class DescribeAttackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAttackXAmzTargetEnum;
}
export declare class DescribeAttackRequest extends SpeakeasyBase {
    headers: DescribeAttackHeaders;
    request: shared.DescribeAttackRequest;
}
export declare class DescribeAttackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAttackResponse?: shared.DescribeAttackResponse;
    internalErrorException?: any;
    statusCode: number;
}
