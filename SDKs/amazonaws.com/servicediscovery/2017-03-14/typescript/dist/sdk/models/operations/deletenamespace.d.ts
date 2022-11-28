import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314DeleteNamespace = "Route53AutoNaming_v20170314.DeleteNamespace"
}
export declare class DeleteNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNamespaceXAmzTargetEnum;
}
export declare class DeleteNamespaceRequest extends SpeakeasyBase {
    headers: DeleteNamespaceHeaders;
    request: shared.DeleteNamespaceRequest;
}
export declare class DeleteNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    deleteNamespaceResponse?: shared.DeleteNamespaceResponse;
    duplicateRequest?: any;
    invalidInput?: any;
    namespaceNotFound?: any;
    resourceInUse?: any;
    statusCode: number;
}
