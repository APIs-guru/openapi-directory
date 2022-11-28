import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TestAlarmXAmzTargetEnum {
    Lightsail20161128TestAlarm = "Lightsail_20161128.TestAlarm"
}
export declare class TestAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestAlarmXAmzTargetEnum;
}
export declare class TestAlarmRequest extends SpeakeasyBase {
    headers: TestAlarmHeaders;
    request: shared.TestAlarmRequest;
}
export declare class TestAlarmResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    testAlarmResult?: shared.TestAlarmResult;
    unauthenticatedException?: any;
}
