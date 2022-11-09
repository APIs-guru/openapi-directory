import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1OperationConfig } from "./googlecloudapigeev1operationconfig";


// GoogleCloudApigeeV1OperationGroup
/** 
 * List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
**/
export class GoogleCloudApigeeV1OperationGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationConfigType" })
  operationConfigType?: string;

  @Metadata({ data: "json, name=operationConfigs", elemType: shared.GoogleCloudApigeeV1OperationConfig })
  operationConfigs?: GoogleCloudApigeeV1OperationConfig[];
}
