import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeviceFleetReportXAmzTargetEnum {
    SageMakerGetDeviceFleetReport = "SageMaker.GetDeviceFleetReport"
}
export declare class GetDeviceFleetReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeviceFleetReportXAmzTargetEnum;
}
export declare class GetDeviceFleetReportRequest extends SpeakeasyBase {
    headers: GetDeviceFleetReportHeaders;
    request: shared.GetDeviceFleetReportRequest;
}
export declare class GetDeviceFleetReportResponse extends SpeakeasyBase {
    contentType: string;
    getDeviceFleetReportResponse?: shared.GetDeviceFleetReportResponse;
    statusCode: number;
}
