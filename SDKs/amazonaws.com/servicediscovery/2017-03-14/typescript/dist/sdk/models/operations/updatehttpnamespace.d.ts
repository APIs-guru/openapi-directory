import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateHttpNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateHttpNamespace = "Route53AutoNaming_v20170314.UpdateHttpNamespace"
}
export declare class UpdateHttpNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHttpNamespaceXAmzTargetEnum;
}
export declare class UpdateHttpNamespaceRequest extends SpeakeasyBase {
    headers: UpdateHttpNamespaceHeaders;
    request: shared.UpdateHttpNamespaceRequest;
}
export declare class UpdateHttpNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceNotFound?: any;
    resourceInUse?: any;
    statusCode: number;
    updateHttpNamespaceResponse?: shared.UpdateHttpNamespaceResponse;
}
