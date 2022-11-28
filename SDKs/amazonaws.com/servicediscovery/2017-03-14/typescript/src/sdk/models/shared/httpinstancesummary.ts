import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";



// HttpInstanceSummary
/** 
 * In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
**/
export class HttpInstanceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=HealthStatus" })
  healthStatus?: HealthStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NamespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
