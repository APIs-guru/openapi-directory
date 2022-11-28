import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopAutoMlJobXAmzTargetEnum {
    SageMakerStopAutoMlJob = "SageMaker.StopAutoMLJob"
}
export declare class StopAutoMlJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAutoMlJobXAmzTargetEnum;
}
export declare class StopAutoMlJobRequest extends SpeakeasyBase {
    headers: StopAutoMlJobHeaders;
    request: shared.StopAutoMlJobRequest;
}
export declare class StopAutoMlJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
