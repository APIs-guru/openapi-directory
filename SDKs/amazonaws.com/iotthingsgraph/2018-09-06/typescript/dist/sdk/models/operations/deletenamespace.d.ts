import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteNamespaceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteNamespace = "IotThingsGraphFrontEndService.DeleteNamespace"
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
    request: Map<string, any>;
}
export declare class DeleteNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    deleteNamespaceResponse?: shared.DeleteNamespaceResponse;
    internalFailureException?: any;
    statusCode: number;
    throttlingException?: any;
}
