import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateImageXAmzTargetEnum {
    SageMakerCreateImage = "SageMaker.CreateImage"
}
export declare class CreateImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageXAmzTargetEnum;
}
export declare class CreateImageRequest extends SpeakeasyBase {
    headers: CreateImageHeaders;
    request: shared.CreateImageRequest;
}
export declare class CreateImageResponse extends SpeakeasyBase {
    contentType: string;
    createImageResponse?: shared.CreateImageResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
