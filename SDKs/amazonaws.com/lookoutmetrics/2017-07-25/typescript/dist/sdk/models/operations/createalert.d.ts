import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAlertHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A configuration that specifies the action to perform when anomalies are detected.
**/
export declare class CreateAlertRequestBodyAction extends SpeakeasyBase {
    lambdaConfiguration?: shared.LambdaConfiguration;
    snsConfiguration?: shared.SnsConfiguration;
}
export declare class CreateAlertRequestBody extends SpeakeasyBase {
    action: CreateAlertRequestBodyAction;
    alertDescription?: string;
    alertName: string;
    alertSensitivityThreshold: number;
    anomalyDetectorArn: string;
    tags?: Map<string, string>;
}
export declare class CreateAlertRequest extends SpeakeasyBase {
    headers: CreateAlertHeaders;
    request: CreateAlertRequestBody;
}
export declare class CreateAlertResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createAlertResponse?: shared.CreateAlertResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
