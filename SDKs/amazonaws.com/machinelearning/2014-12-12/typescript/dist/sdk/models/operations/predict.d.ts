import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PredictXAmzTargetEnum {
    AmazonMl20141212Predict = "AmazonML_20141212.Predict"
}
export declare class PredictHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PredictXAmzTargetEnum;
}
export declare class PredictRequest extends SpeakeasyBase {
    headers: PredictHeaders;
    request: shared.PredictInput;
}
export declare class PredictResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    predictOutput?: shared.PredictOutput;
    predictorNotMountedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
