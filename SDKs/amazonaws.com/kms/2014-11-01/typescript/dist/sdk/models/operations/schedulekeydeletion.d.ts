import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ScheduleKeyDeletionXAmzTargetEnum {
    TrentServiceScheduleKeyDeletion = "TrentService.ScheduleKeyDeletion"
}
export declare class ScheduleKeyDeletionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScheduleKeyDeletionXAmzTargetEnum;
}
export declare class ScheduleKeyDeletionRequest extends SpeakeasyBase {
    headers: ScheduleKeyDeletionHeaders;
    request: shared.ScheduleKeyDeletionRequest;
}
export declare class ScheduleKeyDeletionResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    scheduleKeyDeletionResponse?: shared.ScheduleKeyDeletionResponse;
    statusCode: number;
}
