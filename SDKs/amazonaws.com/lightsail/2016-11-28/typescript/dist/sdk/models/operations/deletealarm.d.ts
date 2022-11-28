import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAlarmXAmzTargetEnum {
    Lightsail20161128DeleteAlarm = "Lightsail_20161128.DeleteAlarm"
}
export declare class DeleteAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAlarmXAmzTargetEnum;
}
export declare class DeleteAlarmRequest extends SpeakeasyBase {
    headers: DeleteAlarmHeaders;
    request: shared.DeleteAlarmRequest;
}
export declare class DeleteAlarmResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteAlarmResult?: shared.DeleteAlarmResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
