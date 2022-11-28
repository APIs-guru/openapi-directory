import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreatePrivateDnsNamespace = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"
}
export declare class CreatePrivateDnsNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePrivateDnsNamespaceXAmzTargetEnum;
}
export declare class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
    headers: CreatePrivateDnsNamespaceHeaders;
    request: shared.CreatePrivateDnsNamespaceRequest;
}
export declare class CreatePrivateDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    createPrivateDnsNamespaceResponse?: shared.CreatePrivateDnsNamespaceResponse;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceAlreadyExists?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
