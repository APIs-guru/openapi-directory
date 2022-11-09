import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateMlModelXAmzTargetEnum {
    AmazonMl20141212CreateMlModel = "AmazonML_20141212.CreateMLModel"
}
export declare class CreateMlModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMlModelXAmzTargetEnum;
}
export declare class CreateMlModelRequest extends SpeakeasyBase {
    headers: CreateMlModelHeaders;
    request: shared.CreateMlModelInput;
}
export declare class CreateMlModelResponse extends SpeakeasyBase {
    contentType: string;
    createMlModelOutput?: shared.CreateMlModelOutput;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
