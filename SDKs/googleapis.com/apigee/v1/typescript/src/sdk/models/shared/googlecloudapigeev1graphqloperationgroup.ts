import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1GraphQlOperationConfig } from "./googlecloudapigeev1graphqloperationconfig";



// GoogleCloudApigeeV1GraphQlOperationGroup
/** 
 * List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
**/
export class GoogleCloudApigeeV1GraphQlOperationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationConfigType" })
  operationConfigType?: string;

  @SpeakeasyMetadata({ data: "json, name=operationConfigs", elemType: GoogleCloudApigeeV1GraphQlOperationConfig })
  operationConfigs?: GoogleCloudApigeeV1GraphQlOperationConfig[];
}
