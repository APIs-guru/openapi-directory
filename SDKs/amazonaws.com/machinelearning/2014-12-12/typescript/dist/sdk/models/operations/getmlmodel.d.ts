import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetMlModelXAmzTargetEnum {
    AmazonMl20141212GetMlModel = "AmazonML_20141212.GetMLModel"
}
export declare class GetMlModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMlModelXAmzTargetEnum;
}
export declare class GetMlModelRequest extends SpeakeasyBase {
    headers: GetMlModelHeaders;
    request: shared.GetMlModelInput;
}
export declare class GetMlModelResponse extends SpeakeasyBase {
    contentType: string;
    getMlModelOutput?: shared.GetMlModelOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
