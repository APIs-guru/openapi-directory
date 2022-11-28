import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterContainerImageXAmzTargetEnum {
    Lightsail20161128RegisterContainerImage = "Lightsail_20161128.RegisterContainerImage"
}
export declare class RegisterContainerImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterContainerImageXAmzTargetEnum;
}
export declare class RegisterContainerImageRequest extends SpeakeasyBase {
    headers: RegisterContainerImageHeaders;
    request: shared.RegisterContainerImageRequest;
}
export declare class RegisterContainerImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    registerContainerImageResult?: shared.RegisterContainerImageResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
