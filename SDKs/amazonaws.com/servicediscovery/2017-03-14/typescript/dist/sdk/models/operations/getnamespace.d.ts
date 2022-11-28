import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314GetNamespace = "Route53AutoNaming_v20170314.GetNamespace"
}
export declare class GetNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNamespaceXAmzTargetEnum;
}
export declare class GetNamespaceRequest extends SpeakeasyBase {
    headers: GetNamespaceHeaders;
    request: shared.GetNamespaceRequest;
}
export declare class GetNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    getNamespaceResponse?: shared.GetNamespaceResponse;
    invalidInput?: any;
    namespaceNotFound?: any;
    statusCode: number;
}
