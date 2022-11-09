import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthStatusEnum } from "./healthstatusenum";


// HttpInstanceSummary
/** 
 * In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
**/
export class HttpInstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=HealthStatus" })
  healthStatus?: HealthStatusEnum;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=NamespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
