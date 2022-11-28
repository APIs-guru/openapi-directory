import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteContainerImageXAmzTargetEnum {
    Lightsail20161128DeleteContainerImage = "Lightsail_20161128.DeleteContainerImage"
}
export declare class DeleteContainerImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContainerImageXAmzTargetEnum;
}
export declare class DeleteContainerImageRequest extends SpeakeasyBase {
    headers: DeleteContainerImageHeaders;
    request: shared.DeleteContainerImageRequest;
}
export declare class DeleteContainerImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteContainerImageResult?: Map<string, any>;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
