import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAlarmsXAmzTargetEnum {
    Lightsail20161128GetAlarms = "Lightsail_20161128.GetAlarms"
}
export declare class GetAlarmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAlarmsXAmzTargetEnum;
}
export declare class GetAlarmsRequest extends SpeakeasyBase {
    headers: GetAlarmsHeaders;
    request: shared.GetAlarmsRequest;
}
export declare class GetAlarmsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAlarmsResult?: shared.GetAlarmsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
