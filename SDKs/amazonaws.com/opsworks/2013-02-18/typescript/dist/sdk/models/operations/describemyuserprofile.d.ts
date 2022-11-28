import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeMyUserProfileXAmzTargetEnum {
    OpsWorks20130218DescribeMyUserProfile = "OpsWorks_20130218.DescribeMyUserProfile"
}
export declare class DescribeMyUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMyUserProfileXAmzTargetEnum;
}
export declare class DescribeMyUserProfileRequest extends SpeakeasyBase {
    headers: DescribeMyUserProfileHeaders;
}
export declare class DescribeMyUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    describeMyUserProfileResult?: shared.DescribeMyUserProfileResult;
    statusCode: number;
}
