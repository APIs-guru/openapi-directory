import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegistryNamespacesHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetRegistryNamespacesRequest extends SpeakeasyBase {
    headers: GetRegistryNamespacesHeaders;
}
export declare class GetRegistryNamespacesResponse extends SpeakeasyBase {
    contentType: string;
    namespace?: shared.Namespace;
    statusCode: number;
}
