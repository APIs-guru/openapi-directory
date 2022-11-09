import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateHttpNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateHttpNamespace = "Route53AutoNaming_v20170314.CreateHttpNamespace"
}
export declare class CreateHttpNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHttpNamespaceXAmzTargetEnum;
}
export declare class CreateHttpNamespaceRequest extends SpeakeasyBase {
    headers: CreateHttpNamespaceHeaders;
    request: shared.CreateHttpNamespaceRequest;
}
export declare class CreateHttpNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    createHttpNamespaceResponse?: shared.CreateHttpNamespaceResponse;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceAlreadyExists?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
