import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about a detector's configuration.
**/
export declare class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
    anomalyDetectorFrequency?: shared.FrequencyEnum;
}
export declare class CreateAnomalyDetectorRequestBody extends SpeakeasyBase {
    anomalyDetectorConfig: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
    anomalyDetectorDescription?: string;
    anomalyDetectorName: string;
    kmsKeyArn?: string;
    tags?: Map<string, string>;
}
export declare class CreateAnomalyDetectorRequest extends SpeakeasyBase {
    headers: CreateAnomalyDetectorHeaders;
    request: CreateAnomalyDetectorRequestBody;
}
export declare class CreateAnomalyDetectorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createAnomalyDetectorResponse?: shared.CreateAnomalyDetectorResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
