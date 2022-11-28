import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobUnlockCodeXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetJobUnlockCode = "AWSIESnowballJobManagementService.GetJobUnlockCode"
}
export declare class GetJobUnlockCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobUnlockCodeXAmzTargetEnum;
}
export declare class GetJobUnlockCodeRequest extends SpeakeasyBase {
    headers: GetJobUnlockCodeHeaders;
    request: shared.GetJobUnlockCodeRequest;
}
export declare class GetJobUnlockCodeResponse extends SpeakeasyBase {
    contentType: string;
    getJobUnlockCodeResult?: shared.GetJobUnlockCodeResult;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    statusCode: number;
}
