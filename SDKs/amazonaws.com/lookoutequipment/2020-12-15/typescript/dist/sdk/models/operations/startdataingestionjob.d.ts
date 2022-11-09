import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartDataIngestionJobXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceStartDataIngestionJob = "AWSLookoutEquipmentFrontendService.StartDataIngestionJob"
}
export declare class StartDataIngestionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDataIngestionJobXAmzTargetEnum;
}
export declare class StartDataIngestionJobRequest extends SpeakeasyBase {
    headers: StartDataIngestionJobHeaders;
    request: shared.StartDataIngestionJobRequest;
}
export declare class StartDataIngestionJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    startDataIngestionJobResponse?: shared.StartDataIngestionJobResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
