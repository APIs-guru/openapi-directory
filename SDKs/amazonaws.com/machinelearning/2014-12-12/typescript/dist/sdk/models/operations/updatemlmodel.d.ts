import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateMlModelXAmzTargetEnum {
    AmazonMl20141212UpdateMlModel = "AmazonML_20141212.UpdateMLModel"
}
export declare class UpdateMlModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMlModelXAmzTargetEnum;
}
export declare class UpdateMlModelRequest extends SpeakeasyBase {
    headers: UpdateMlModelHeaders;
    request: shared.UpdateMlModelInput;
}
export declare class UpdateMlModelResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateMlModelOutput?: shared.UpdateMlModelOutput;
}
