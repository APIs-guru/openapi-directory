import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerImagesXAmzTargetEnum {
    Lightsail20161128GetContainerImages = "Lightsail_20161128.GetContainerImages"
}
export declare class GetContainerImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerImagesXAmzTargetEnum;
}
export declare class GetContainerImagesRequest extends SpeakeasyBase {
    headers: GetContainerImagesHeaders;
    request: shared.GetContainerImagesRequest;
}
export declare class GetContainerImagesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContainerImagesResult?: shared.GetContainerImagesResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
