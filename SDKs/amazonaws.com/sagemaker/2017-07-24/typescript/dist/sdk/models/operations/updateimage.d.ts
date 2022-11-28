import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateImageXAmzTargetEnum {
    SageMakerUpdateImage = "SageMaker.UpdateImage"
}
export declare class UpdateImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateImageXAmzTargetEnum;
}
export declare class UpdateImageRequest extends SpeakeasyBase {
    headers: UpdateImageHeaders;
    request: shared.UpdateImageRequest;
}
export declare class UpdateImageResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
    updateImageResponse?: shared.UpdateImageResponse;
}
