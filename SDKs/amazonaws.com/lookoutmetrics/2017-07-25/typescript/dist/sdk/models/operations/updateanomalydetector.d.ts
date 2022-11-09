import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAnomalyDetectorHeaders extends SpeakeasyBase {
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
export declare class UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
    anomalyDetectorFrequency?: shared.FrequencyEnum;
}
export declare class UpdateAnomalyDetectorRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    anomalyDetectorConfig?: UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
    anomalyDetectorDescription?: string;
    kmsKeyArn?: string;
}
export declare class UpdateAnomalyDetectorRequest extends SpeakeasyBase {
    headers: UpdateAnomalyDetectorHeaders;
    request: UpdateAnomalyDetectorRequestBody;
}
export declare class UpdateAnomalyDetectorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateAnomalyDetectorResponse?: shared.UpdateAnomalyDetectorResponse;
    validationException?: any;
}
