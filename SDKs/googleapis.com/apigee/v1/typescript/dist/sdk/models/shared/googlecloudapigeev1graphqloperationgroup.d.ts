import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1GraphQlOperationConfig } from "./googlecloudapigeev1graphqloperationconfig";
/**
 * List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
**/
export declare class GoogleCloudApigeeV1GraphQlOperationGroup extends SpeakeasyBase {
    operationConfigType?: string;
    operationConfigs?: GoogleCloudApigeeV1GraphQlOperationConfig[];
}
