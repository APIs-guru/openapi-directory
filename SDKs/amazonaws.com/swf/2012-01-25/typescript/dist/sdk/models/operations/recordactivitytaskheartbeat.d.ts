import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RecordActivityTaskHeartbeatXAmzTargetEnum {
    SimpleWorkflowServiceRecordActivityTaskHeartbeat = "SimpleWorkflowService.RecordActivityTaskHeartbeat"
}
export declare class RecordActivityTaskHeartbeatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RecordActivityTaskHeartbeatXAmzTargetEnum;
}
export declare class RecordActivityTaskHeartbeatRequest extends SpeakeasyBase {
    headers: RecordActivityTaskHeartbeatHeaders;
    request: shared.RecordActivityTaskHeartbeatInput;
}
export declare class RecordActivityTaskHeartbeatResponse extends SpeakeasyBase {
    activityTaskStatus?: shared.ActivityTaskStatus;
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
