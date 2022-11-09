import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class BackTestAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BackTestAnomalyDetectorRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
}
export declare class BackTestAnomalyDetectorRequest extends SpeakeasyBase {
    headers: BackTestAnomalyDetectorHeaders;
    request: BackTestAnomalyDetectorRequestBody;
}
export declare class BackTestAnomalyDetectorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    backTestAnomalyDetectorResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
