import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSnowballUsageXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetSnowballUsage = "AWSIESnowballJobManagementService.GetSnowballUsage"
}
export declare class GetSnowballUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSnowballUsageXAmzTargetEnum;
}
export declare class GetSnowballUsageRequest extends SpeakeasyBase {
    headers: GetSnowballUsageHeaders;
    request: Map<string, any>;
}
export declare class GetSnowballUsageResponse extends SpeakeasyBase {
    contentType: string;
    getSnowballUsageResult?: shared.GetSnowballUsageResult;
    statusCode: number;
}
