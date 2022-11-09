import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateResourceXAmzTargetEnum {
    WorkMailServiceCreateResource = "WorkMailService.CreateResource"
}
export declare class CreateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceXAmzTargetEnum;
}
export declare class CreateResourceRequest extends SpeakeasyBase {
    headers: CreateResourceHeaders;
    request: shared.CreateResourceRequest;
}
export declare class CreateResourceResponse extends SpeakeasyBase {
    contentType: string;
    createResourceResponse?: shared.CreateResourceResponse;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    invalidParameterException?: any;
    nameAvailabilityException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    reservedNameException?: any;
    statusCode: number;
}
