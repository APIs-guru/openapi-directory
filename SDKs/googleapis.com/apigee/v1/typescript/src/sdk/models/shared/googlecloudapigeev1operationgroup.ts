import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1OperationConfig } from "./googlecloudapigeev1operationconfig";



// GoogleCloudApigeeV1OperationGroup
/** 
 * List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
**/
export class GoogleCloudApigeeV1OperationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationConfigType" })
  operationConfigType?: string;

  @SpeakeasyMetadata({ data: "json, name=operationConfigs", elemType: GoogleCloudApigeeV1OperationConfig })
  operationConfigs?: GoogleCloudApigeeV1OperationConfig[];
}
