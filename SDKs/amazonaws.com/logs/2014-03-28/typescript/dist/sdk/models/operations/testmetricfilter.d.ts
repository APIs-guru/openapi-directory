import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TestMetricFilterXAmzTargetEnum {
    Logs20140328TestMetricFilter = "Logs_20140328.TestMetricFilter"
}
export declare class TestMetricFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestMetricFilterXAmzTargetEnum;
}
export declare class TestMetricFilterRequest extends SpeakeasyBase {
    headers: TestMetricFilterHeaders;
    request: shared.TestMetricFilterRequest;
}
export declare class TestMetricFilterResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    testMetricFilterResponse?: shared.TestMetricFilterResponse;
}
