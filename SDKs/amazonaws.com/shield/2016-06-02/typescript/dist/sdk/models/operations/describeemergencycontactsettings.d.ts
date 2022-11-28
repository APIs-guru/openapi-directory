import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEmergencyContactSettingsXAmzTargetEnum {
    AwsShield20160616DescribeEmergencyContactSettings = "AWSShield_20160616.DescribeEmergencyContactSettings"
}
export declare class DescribeEmergencyContactSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEmergencyContactSettingsXAmzTargetEnum;
}
export declare class DescribeEmergencyContactSettingsRequest extends SpeakeasyBase {
    headers: DescribeEmergencyContactSettingsHeaders;
    request: Map<string, any>;
}
export declare class DescribeEmergencyContactSettingsResponse extends SpeakeasyBase {
    contentType: string;
    describeEmergencyContactSettingsResponse?: shared.DescribeEmergencyContactSettingsResponse;
    internalErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
