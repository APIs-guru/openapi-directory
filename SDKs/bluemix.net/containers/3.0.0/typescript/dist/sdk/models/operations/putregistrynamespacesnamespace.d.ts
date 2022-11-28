import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRegistryNamespacesNamespacePathParams extends SpeakeasyBase {
    namespace: string;
}
export declare class PutRegistryNamespacesNamespaceHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PutRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
    pathParams: PutRegistryNamespacesNamespacePathParams;
    headers: PutRegistryNamespacesNamespaceHeaders;
}
export declare class PutRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    namespace?: shared.Namespace;
    statusCode: number;
}
