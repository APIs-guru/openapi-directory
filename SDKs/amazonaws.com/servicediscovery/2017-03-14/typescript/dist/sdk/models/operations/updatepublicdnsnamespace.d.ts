import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePublicDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePublicDnsNamespace = "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace"
}
export declare class UpdatePublicDnsNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePublicDnsNamespaceXAmzTargetEnum;
}
export declare class UpdatePublicDnsNamespaceRequest extends SpeakeasyBase {
    headers: UpdatePublicDnsNamespaceHeaders;
    request: shared.UpdatePublicDnsNamespaceRequest;
}
export declare class UpdatePublicDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceNotFound?: any;
    resourceInUse?: any;
    statusCode: number;
    updatePublicDnsNamespaceResponse?: shared.UpdatePublicDnsNamespaceResponse;
}
