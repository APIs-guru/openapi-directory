import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMlModelXAmzTargetEnum {
    AmazonMl20141212DeleteMlModel = "AmazonML_20141212.DeleteMLModel"
}
export declare class DeleteMlModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMlModelXAmzTargetEnum;
}
export declare class DeleteMlModelRequest extends SpeakeasyBase {
    headers: DeleteMlModelHeaders;
    request: shared.DeleteMlModelInput;
}
export declare class DeleteMlModelResponse extends SpeakeasyBase {
    contentType: string;
    deleteMlModelOutput?: shared.DeleteMlModelOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
