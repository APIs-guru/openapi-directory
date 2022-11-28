import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAlarmXAmzTargetEnum {
    Lightsail20161128PutAlarm = "Lightsail_20161128.PutAlarm"
}
export declare class PutAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAlarmXAmzTargetEnum;
}
export declare class PutAlarmRequest extends SpeakeasyBase {
    headers: PutAlarmHeaders;
    request: shared.PutAlarmRequest;
}
export declare class PutAlarmResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    putAlarmResult?: shared.PutAlarmResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
