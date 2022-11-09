import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePrivateDnsNamespace = "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace"
}
export declare class UpdatePrivateDnsNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePrivateDnsNamespaceXAmzTargetEnum;
}
export declare class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
    headers: UpdatePrivateDnsNamespaceHeaders;
    request: shared.UpdatePrivateDnsNamespaceRequest;
}
export declare class UpdatePrivateDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceNotFound?: any;
    resourceInUse?: any;
    statusCode: number;
    updatePrivateDnsNamespaceResponse?: shared.UpdatePrivateDnsNamespaceResponse;
}
