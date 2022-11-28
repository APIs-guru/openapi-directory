import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateServiceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateService = "Route53AutoNaming_v20170314.CreateService"
}
export declare class CreateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceXAmzTargetEnum;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    headers: CreateServiceHeaders;
    request: shared.CreateServiceRequest;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    createServiceResponse?: shared.CreateServiceResponse;
    invalidInput?: any;
    namespaceNotFound?: any;
    resourceLimitExceeded?: any;
    serviceAlreadyExists?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
