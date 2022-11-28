import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerApiMetadataXAmzTargetEnum {
    Lightsail20161128GetContainerApiMetadata = "Lightsail_20161128.GetContainerAPIMetadata"
}
export declare class GetContainerApiMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerApiMetadataXAmzTargetEnum;
}
export declare class GetContainerApiMetadataRequest extends SpeakeasyBase {
    headers: GetContainerApiMetadataHeaders;
    request: Map<string, any>;
}
export declare class GetContainerApiMetadataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getContainerApiMetadataResult?: shared.GetContainerApiMetadataResult;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
