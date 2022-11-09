import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRegistryNamespacesNamespacePathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class GetRegistryNamespacesNamespaceHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
    pathParams: GetRegistryNamespacesNamespacePathParams;
    headers: GetRegistryNamespacesNamespaceHeaders;
}
export declare class GetRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    namespace?: shared.Namespace;
    statusCode: number;
}
