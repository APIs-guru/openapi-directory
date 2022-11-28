import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1OperationConfig } from "./googlecloudapigeev1operationconfig";
/**
 * List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
**/
export declare class GoogleCloudApigeeV1OperationGroup extends SpeakeasyBase {
    operationConfigType?: string;
    operationConfigs?: GoogleCloudApigeeV1OperationConfig[];
}
