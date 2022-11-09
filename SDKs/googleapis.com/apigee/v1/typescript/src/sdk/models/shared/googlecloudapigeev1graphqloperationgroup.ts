import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1GraphQlOperationConfig } from "./googlecloudapigeev1graphqloperationconfig";


// GoogleCloudApigeeV1GraphQlOperationGroup
/** 
 * List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
**/
export class GoogleCloudApigeeV1GraphQlOperationGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationConfigType" })
  operationConfigType?: string;

  @Metadata({ data: "json, name=operationConfigs", elemType: shared.GoogleCloudApigeeV1GraphQlOperationConfig })
  operationConfigs?: GoogleCloudApigeeV1GraphQlOperationConfig[];
}
