import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteImageXAmzTargetEnum {
    SageMakerDeleteImage = "SageMaker.DeleteImage"
}
export declare class DeleteImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImageXAmzTargetEnum;
}
export declare class DeleteImageRequest extends SpeakeasyBase {
    headers: DeleteImageHeaders;
    request: shared.DeleteImageRequest;
}
export declare class DeleteImageResponse extends SpeakeasyBase {
    contentType: string;
    deleteImageResponse?: Map<string, any>;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
}
