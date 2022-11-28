import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePublicDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreatePublicDnsNamespace = "Route53AutoNaming_v20170314.CreatePublicDnsNamespace"
}
export declare class CreatePublicDnsNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePublicDnsNamespaceXAmzTargetEnum;
}
export declare class CreatePublicDnsNamespaceRequest extends SpeakeasyBase {
    headers: CreatePublicDnsNamespaceHeaders;
    request: shared.CreatePublicDnsNamespaceRequest;
}
export declare class CreatePublicDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    createPublicDnsNamespaceResponse?: shared.CreatePublicDnsNamespaceResponse;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceAlreadyExists?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
