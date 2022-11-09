import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthStatusFilterEnum } from "./healthstatusfilterenum";


export class DiscoverInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthStatus" })
  healthStatus?: HealthStatusFilterEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NamespaceName" })
  namespaceName: string;

  @Metadata({ data: "json, name=OptionalParameters" })
  optionalParameters?: Map<string, string>;

  @Metadata({ data: "json, name=QueryParameters" })
  queryParameters?: Map<string, string>;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName: string;
}
